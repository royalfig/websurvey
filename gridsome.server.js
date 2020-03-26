// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
require("dotenv").config();

module.exports = function(api) {
  const websurveyID =
    "https://www.formstack.com/api/v2/form/3656391/submission.json?data=true";
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const {
      data: { pages }
    } = await axios.get(websurveyID, {
      headers: { Authorization: "Bearer " + process.env.FORMSTACK_API }
    });

    const totalData = [];

    const forLoop = async () => {
      for (let i = 1; i <= pages; i++) {
        const {
          data: { submissions }
        } = await axios.get(websurveyID, {
          params: {
            data: true,
            page: i
          },
          headers: { Authorization: "Bearer " + process.env.FORMSTACK_API }
        });

        totalData.push(submissions);
      }

      return totalData.flat();
    };

    const allData = await forLoop();

    // Aggregate data and add it to the series
    // Make unique list of categories
    // Add id and series name
    class BarGraph {
      constructor(data, filter, name) {
        this.filteredData = data.filter(item => item.data[filter]);
        this.name = name;
        this.totalItems = this.filteredData.map(
          item => item.data[filter].value
        );
        this.uniqueOptions = [...new Set(this.totalItems)].sort();
        this.aggregatedData = this.uniqueOptions.map(option => {
          let count = 0;
          for (let i = 0; i < this.totalItems.length; i++) {
            if (this.totalItems[i] === option) {
              count++;
            }
          }
          return count;
        });
        this.configObject = {
          name: this.name,
          series: [{ name: this.name, data: this.aggregatedData }],
          chartOptions: {
            xaxis: {
              categories: this.uniqueOptions
            },
            theme: {
              palette: "palette7"
            },
            legend: {
              position: "bottom"
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            }
          }
        };
      }
    }
    class MatrixGraph {
      constructor(data, filter, name) {
        this.filteredData = data.filter(item => item.data[filter]);
        this.totalItems = this.filteredData.map(
          item => item.data[filter].value
        );
        this.convertedToArray = this.totalItems.join("\n").split(/\n/);
        this.uniqueArray = [...new Set(this.convertedToArray)].sort();
        this.obj = {};
        this.createdObj = this.createObj();
        this.countedArray = this.countData();
        this.test = console.log(this.obj);
      }

      //Methods
      createObj() {
        this.uniqueArray.forEach(item => {
          const key = item.match(/([A-Za-z& ]+)/)[0].trim();
          this.obj[key] = {};
        });
      }

      countData() {
        this.uniqueArray.map(item => {
          let count = 0;
          const key = item.match(/([A-Za-z& ]+)/)[0].trim();
          const prop = item.match(/\w+$/)[0].trim();

          this.convertedToArray.map(item2 => {
            if (item === item2) {
              count++;
            }
          });
          Object.assign(this.obj[key], { [prop]: count });
        });
      }
    }

    const graphData = actions.addCollection({ typeName: "graphData" });

    graphData.addNode({
      age: new BarGraph(allData, "87436962", "Respondent Age").configObject,
      websiteImportance: new BarGraph(allData, "85042330", "Website Importance")
        .configObject,
      socialMedia: new BarGraph(allData, "85500080", "Social Media")
        .configObject,
      compBenefit: new BarGraph(allData, "85499617", "Companion Piece Benefit")
        .configObject,
      shouldRedesign: new BarGraph(allData, "85041895", "Redesign Sentiment")
        .configObject,
      membershipStatus: new BarGraph(allData, "88080962", "Membership Status")
        .configObject,
      visitedPages: new MatrixGraph(
        allData,
        "85042495",
        "Visited Pages"
      ).countObjects()
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

const allValues = (data, property, type) => {
  if (!item.data) return;
  if (type === radio) {
  }
};

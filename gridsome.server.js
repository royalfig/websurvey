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
    class pieGraph {
      constructor(data, filter) {
        this.filteredData = data.filter(item => item.data[filter]);
        this.name = this.filteredData[0].data[filter].label;
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
          series: this.aggregatedData,
          chartOptions: {
            labels: this.uniqueOptions,
            theme: {
              palette: "palette7"
            },
            legend: {
              position: "bottom"
            }
          }
        };
      }
    }

    // {
    //   options: {
    //     chart: {
    //       id: "vuechart-example"
    //     },
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    //     }
    //   },
    //   series: [
    //     {
    //       name: "series-1",
    //       data: [30, 40, 45, 50, 49, 60, 70, 91]
    //     }
    //   ]
    // };

    const graphData = actions.addCollection({ typeName: "graphData" });

    graphData.addNode({
      age: new pieGraph(allData, "87436962", "Respondent Age").configObject,
      websiteImportance: new pieGraph(allData, "85042330", "Website Importance")
        .configObject,
      socialMedia: new pieGraph(allData, "85500080", "Social Media")
        .configObject,
      compBenefit: new pieGraph(allData, "85499617", "Companion Piece Benefit")
        .configObject,
      shouldRedesign: new pieGraph(allData, "85041895", "Should Redesign")
        .configObject,
      membershipStatus: new pieGraph(allData, "88080962", "Membership Status")
        .configObject
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

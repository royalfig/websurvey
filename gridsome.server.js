// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
require("dotenv").config();
// const path = require("path");
// console.log(path.join(__dirname, "/utils/MatrixGraph"));

// const MatrixGraph = require(path.join(__dirname, "static/utils/MatrixGraph"));
// const PieGraph = require(path.join(__dirname, "static/utils/PieGraph"));
// const CheckBoxData = require(path.join(__dirname, "static/utils/CheckboxData"));
// const Country = require(path.join(__dirname, "static/utils/Country"));
// const StandardPie = require(path.join(__dirname, "static/utils/StandardPie"));
// const Comments = require(path.join(__dirname, "static/utils/Comments"));

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
      const flatArray = totalData.flat();
      return flatArray;
    };

    const allData = await forLoop();

    const graphData = actions.addCollection({ typeName: "graphData" });

    graphData.addNode({
      age: new PieGraph(allData, "87436962", "Age").configObject,
      websiteImportance: new PieGraph(
        allData,
        "85042330",
        "How important is the HSS website?"
      ).configObject,
      socialMedia: new PieGraph(
        allData,
        "85500080",
        "HSS social media presence"
      ).configObject,
      compBenefit: new PieGraph(
        allData,
        "85499617",
        "Would you benefit from a site that published essays and/or blog posts on digital and other resources"
      ).configObject,
      shouldRedesign: new PieGraph(
        allData,
        "85041895",
        "Should the HSS redesign its website?"
      ).configObject,
      membershipStatus: new PieGraph(allData, "88080962", "Membership Status")
        .configObject,
      visitedPages: new MatrixGraph(
        allData,
        "85042495",
        "Which pages do you visit?"
      ).configObject,
      helpfulPages: new MatrixGraph(
        allData,
        "85498946",
        "Which pages are useful?"
      ).configObject,
      helpfulFeatures: new MatrixGraph(
        allData,
        "85499867",
        "Which features are useful?"
      ).configObject,
      accessibility: new MatrixGraph(
        allData,
        "88133257",
        "How accessible is the HSS website?"
      ).configObject,
      otherFeatures: new CheckBoxData(
        allData,
        "85499428",
        "Which features do you find useful on other websites",
        "bar"
      ).configObject,
      device: new CheckBoxData(
        allData,
        "85495109",
        "How do you access the HSS website?",
        "pie"
      ).configObject,
      resemble: new CheckBoxData(
        allData,
        "85499281",
        "Which websites do you wish HSS most resembled?",
        "bar"
      ).configObject,
      employmentStatus: new CheckBoxData(
        allData,
        "85500947",
        "Employment Status",
        "pie"
      ).configObject,
      country: new Country(allData, "87436804", "Country of Residence")
        .configObject,
      flags: new Country(allData, "87436804", "Country of Residence").flagCount,
      gender: new StandardPie(allData, "85500948", "Gender").configObject,
      race: new StandardPie(allData, "85500950", "Race and/or Ethnicity")
        .configObject,
      // redesignNegComment: new Comments(allData, "85495096", "Negative")
      //   .totalItems,
      redesignPosComment: new Comments(allData, "85495101", "Positive")
        .totalItems,
      redesignNeuComment: new Comments(allData, "85496788", "Positive")
        .totalItems,
      redesignComments: [
        {
          label: "Yes",
          content: new Comments(allData, "85495101", "Positive").totalItems
        },
        {
          label: "Neutral",
          content: new Comments(allData, "85496788", "Neutral").totalItems
        }
      ],
      accessibilityComment: new Comments(
        allData,
        "88133388",
        "Accessibility Comments"
      ).totalItems,
      wishFulfillment: new Comments(
        allData,
        "85499050",
        "Wish Fulfillment Comments"
      ).totalItems,
      visitedPagesComment: new Comments(
        allData,
        "85498998",
        "Wish Fulfillment Comments"
      ).totalItems,
      useComments: [
        {
          label: "Useful",
          content: new Comments(allData, "85499704", "Useful").totalItems
        },
        {
          label: "Not Useful",
          content: new Comments(allData, "85499837", "Not Useful").totalItems
        }
      ]
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

class CheckBoxData {
  constructor(data, filter, name, type) {
    this.name = name;
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.splitData = this.totalItems.map(item => item.split(/\n/));
    this.allItems = this.splitData.flat();
    this.uniqueList = [...new Set(this.allItems)].sort();
    this.aggregatedData = this.countData();
    this.configObjectPie = {
      series: this.aggregatedData,
      chartOptions: {
        chart: {
          type: "pie",
          fontFamily:
            "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
        },
        labels: this.uniqueList,
        title: {
          text: this.name,
          align: "center"
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center"
        }
      }
    };
    this.configObjectBar = {
      series: [{ data: this.aggregatedData }],
      chartOptions: {
        chart: {
          type: "bar",
          fontFamily:
            "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
        },
        title: {
          text: this.name,
          align: "center"
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: this.uniqueList
        }
      }
    };
    this.configObject =
      type === "pie" ? this.configObjectPie : this.configObjectBar;
  }
  // Methods
  countData() {
    const countedData = this.uniqueList.map(item => {
      let count = 0;
      for (let i = 0; i < this.allItems.length; i++) {
        if (this.allItems[i] === item) {
          count++;
        }
      }
      return count;
    });
    return countedData;
  }
}

class Comments {
  constructor(data, filter, name) {
    this.name = name;
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
  }
}

const emojiFlags = require("emoji-flags");

class Country {
  constructor(data, filter, name) {
    this.name = name;
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.countriesWithoutOther = this.totalItems.map(country =>
      country.replace("Other: ", "").replace(/USA?/i, "United States")
    );
    this.preferNotObj = {
      name: "Prefer not to answer",
      emoji: "⭕",
      title: null,
      unicode: null,
      title: null,
      code: null
    };

    this.countryEmojis = this.countriesWithoutOther.map(country => {
      if (country !== "Prefer not to answer") {
        const index = emojiFlags.names.findIndex(
          element => element === country
        );
        return emojiFlags.data[index];
      }

      return this.preferNotObj;
    });

    this.uniqueEmojis = [...new Set(this.countryEmojis)];

    this.countriesCounted = this.uniqueEmojis.map(item => {
      item.count = 0;
      this.countryEmojis.map(item2 => {
        if (item2 === item) {
          item.count++;
        }
      });
      return item;
    });

    this.countriesCountedAndSorted = this.countriesCounted.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.preferNotIndex = this.countriesCountedAndSorted.findIndex(
      element => element.name === "Prefer not to answer"
    );
    this.reordered = this.reorderedArray();
    this.data = this.countriesCountedAndSorted.map(country => country.count);
    this.categories = this.countriesCountedAndSorted.map(
      country => country.name + " " + country.emoji
    );
    this.nameAndData = this.countriesCountedAndSorted.map(
      country => country.name + ": " + country.count
    );
    this.flags = this.countriesCountedAndSorted.map(country => {
      if (country.name === "Prefer not to answer") {
        return `<svg height="100%" width="100%" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20.84 22.73L19.1 21C19.06 21 19.03 21 19 21H5C3.9 21 3 20.11 3 19V5C3 4.97 3 4.94 3 4.9L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M21 5C21 3.89 20.1 3 19 3H6.2L21 17.8V5Z" />
    </svg>`;
      }
      return `<img src="https://www.countryflags.io/${country.code}/flat/64.png">`;
    });
    this.flagCount = {
      flag: this.flags,
      data: this.data,
      names: this.nameAndData
    };
    this.configObject = {
      series: [{ data: this.data }],
      chartOptions: {
        chart: {
          type: "bar",
          fontFamily:
            "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
        },
        title: {
          text: this.name,
          align: "center"
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: this.categories
        }
      }
    };
  }

  reorderedArray() {
    const preferNot = this.countriesCountedAndSorted.splice(
      this.preferNotIndex,
      1
    );
    this.countriesCountedAndSorted.push(preferNot[0]);
  }
}

class MatrixGraph {
  constructor(data, filter, name) {
    this.name = name;
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.convertedToArray = this.totalItems.join("\n").split(/\n/);
    this.uniqueKeys = [
      ...new Set(this.convertedToArray.map(key => this.getKey(key)))
    ];
    this.uniqueKeysSorted = this.uniqueKeys.sort();
    this.uniqueProps = [
      ...new Set(this.convertedToArray.map(prop => this.getProp(prop)))
    ];
    this.uniquePropsSorted = this.sortProps();
    this.keyArray = this.uniqueKeysSorted.map(x => {
      const obj = { type: x };
      return obj;
    });
    this.propArray = this.uniquePropsSorted.map(x => {
      const obj = { [x]: 0 };
      return obj;
    });
    this.series = this.getSeries();
    this.configObject = {
      series: this.series,
      chartOptions: this.getConfig()
    };
  }

  //Methods
  getProp(prop) {
    return prop.match(/[/A-Za-z ]+$/)[0].trim();
  }
  getKey(key) {
    return key.match(/([A-Za-z& ]+)/)[0].trim();
  }

  sortProps() {
    if (this.uniqueProps.includes("Very Useful")) {
      return ["Very Useful", "Somewhat Useful", "Not Useful", "N/A"];
    }

    if (this.uniqueProps.includes("Strongly Agree")) {
      return [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree"
      ];
    }

    if (this.uniqueProps.includes("Frequently")) {
      return ["Frequently", "Sometimes", "Never"];
    }

    return this.uniqueProps.sort();
  }

  getSeries() {
    // Modify in place
    this.keyArray.map(x => {
      this.propArray.map(y => {
        Object.assign(x, y);
      });
    });

    this.convertedToArray.forEach(x => {
      const key = this.getKey(x);
      const prop = this.getProp(x);
      this.keyArray.forEach(y => {
        if (y.type === key) {
          y[prop]++;
        }
      });
    });

    const series = this.uniquePropsSorted.map(x => {
      const name = x;
      const data = [];
      this.keyArray.forEach(y => {
        data.push(y[x]);
      });
      return { name: name, data: data };
    });

    return series;
  }

  getConfig() {
    const chartOptions = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "normal",
        fontFamily:
          "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: this.name,
        align: "center"
      },
      xaxis: {
        categories: this.uniqueKeys
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: 0
      }
    };
    return chartOptions;
  }
}

class PieGraph {
  constructor(data, filter, name) {
    this.filteredData = data.filter(item => item.data[filter]);
    this.name = name;
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.uniqueOptions = [...new Set(this.totalItems)];
    this.uniqueOptionsSorted = this.sortOptions();
    this.aggregatedData = this.uniqueOptionsSorted.map(option => {
      let count = 0;
      for (let i = 0; i < this.totalItems.length; i++) {
        if (this.totalItems[i] === option) {
          count++;
        }
      }
      return count;
    });
    this.configObject = {
      series: this.aggregatedData,
      chartOptions: {
        chart: {
          type: "pie",
          height: "300",
          fontFamily:
            "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
        },
        labels: this.uniqueOptionsSorted,
        title: {
          text: this.name,
          align: "center"
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center"
        }
      }
    };
  }

  //Methods
  sortOptions() {
    if (this.uniqueOptions.includes("Very Useful")) {
      return ["Very Useful", "Somewhat Useful", "Not Useful", "N/A"];
    }

    if (this.uniqueOptions.includes("Strongly Agree")) {
      return [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree"
      ];
    }

    if (this.uniqueOptions.includes("Maybe")) {
      return ["Yes", "Maybe", "No"];
    }

    if (this.uniqueOptions.includes("Increase and expand to other platforms")) {
      return [
        "Increase and expand to other platforms",
        "Increase",
        "Remain the same",
        "Decrease",
        "Desist"
      ];
    }

    return this.uniqueOptions.sort();
  }
}

class StandardPie {
  constructor(data, filter, name) {
    this.name = name;
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.itemsWithoutOther = this.totalItems.map(item =>
      item.replace("Other: ", "")
    );
    this.itemsStandardized = this.itemStandardizer(this.itemsWithoutOther);
    this.itemUnique = [...new Set(this.itemsStandardized)];
    this.counteditem = this.count(this.itemsStandardized);
    this.aggregatedData = this.aggregateData(this.counteditem);

    this.configObject = {
      series: this.aggregatedData,
      chartOptions: {
        chart: {
          type: "pie",
          height: "300",
          fontFamily:
            "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
        },
        labels: this.itemUnique,
        title: {
          text: this.name,
          align: "center"
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center"
        }
      }
    };
  }

  itemStandardizer(input) {
    const standardizedArray = input.map(
      item =>
        item
          .replace(/M(an)?\b/i, "Male")
          .replace(/F(emale)?\b/i, "Female")
          .charAt(0)
          .toUpperCase() + item.slice(1)
    );
    return standardizedArray;
  }

  count(inputArr) {
    let countedItems = inputArr.reduce(function(allItems, item) {
      if (item in allItems) {
        allItems[item]++;
      } else {
        allItems[item] = 1;
      }
      return allItems;
    }, {});
    return countedItems;
  }

  aggregateData(input) {
    const arr = Object.keys(input).map(item => input[item]);
    return arr;
  }
}

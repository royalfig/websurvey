// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
require("dotenv").config();
const path = require("path");
const MatrixGraph = require(path.join(__dirname, "/src/utils/MatrixGraph"));
const SimpleGraph = require(path.join(__dirname, "/src/utils/SimpleGraph"));
const PieGraph = require(path.join(__dirname, "/src/utils/PieGraph"));
const CheckBoxData = require(path.join(__dirname, "/src/utils/CheckboxData"));

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

    const graphData = actions.addCollection({ typeName: "graphData" });

    graphData.addNode({
      age: new PieGraph(allData, "87436962", "Respondent Age").configObject,
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
      ).configObject
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

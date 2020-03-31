module.exports = class PieGraph {
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
};

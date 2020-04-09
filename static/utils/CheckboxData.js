module.exports = class CheckBoxData {
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
};

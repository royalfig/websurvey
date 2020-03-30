module.exports = class pieGraph {
  constructor(data, filter, name) {
    this.filteredData = data.filter(item => item.data[filter]);
    this.name = name;
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
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
      series: this.aggregatedData,
      chartOptions: {
        chart: {
          type: "pie",
          fontFamily:
            "Roboto,-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
        },
        labels: this.uniqueOptions,
        title: {
          text: this.name
        }
      }
    };
  }
};

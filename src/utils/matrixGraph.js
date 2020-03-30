module.exports = class MatrixGraph {
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
        stackType: "100%",
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
};

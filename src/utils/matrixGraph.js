module.exports = class MatrixGraph {
  constructor(data, filter, name) {
    this.name = name;
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.convertedToArray = this.totalItems.join("\n").split(/\n/);
    this.uniqueKeys = [
      ...new Set(this.convertedToArray.map(x => x.match(/([A-Za-z& ]+)/)[0]))
    ];
    this.uniqueKeysSorted = this.uniqueKeys.sort();
    this.uniqueProps = [
      ...new Set(this.convertedToArray.map(x => x.match(/[/A-Za-z ]+$/)[0]))
    ];
    this.uniquePropsSorted = this.uniqueProps.sort();
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
  getSeries() {
    this.keyArray.map(x => {
      this.propArray.map(y => {
        Object.assign(x, y);
      });
    });
    this.convertedToArray.forEach(x => {
      const key = x.match(/([A-Za-z& ]+)/)[0];
      const prop = x.match(/[/A-Za-z ]+$/)[0];
      this.keyArray.forEach(y => {
        if (y.type === key) {
          y[prop]++;
        }
      });
    });

    const series = this.uniqueProps.map(x => {
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
          "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,'Helvetica Neue', Arial, sans-serif"
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
        text: this.name
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

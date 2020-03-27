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
      name: this.name,
      series: this.series,
      chartOptions: {
        chart: {
          stacked: true,
          height: 350
        },
        xaxis: {
          categories: this.uniqueKeysSorted
        },
        theme: {
          palette: "palette7"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        legend: {
          position: "bottom"
        }
      }
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
};

module.exports = class StandardPie {
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
};

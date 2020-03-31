const emojiFlags = require("emoji-flags");

module.exports = class CountryGraph {
  constructor(data, filter, name) {
    this.name = name;

    this.countries = [
      "Other: US",
      "Other: USA",
      "Other: Canada",
      "Prefer not to answer"
    ];
    this.filteredData = data.filter(item => item.data[filter]);
    this.totalItems = this.filteredData.map(item => item.data[filter].value);
    this.countriesWithoutOther = this.totalItems.map(country =>
      country.replace("Other: ", "").replace(/USA?/i, "United States")
    );
    this.preferNotObj = { name: "Prefer not to answer", emoji: "⭕" };
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
};

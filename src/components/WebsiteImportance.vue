<template>
  <div>
    <h2>{{ $static.data.edges[0].node.websiteImportance.name }}</h2>
    <apexchart
      width="100%"
      type="pie"
      :options="$static.data.edges[0].node.websiteImportance.chartOptions"
      :series="$static.data.edges[0].node.websiteImportance.series"
    />
  </div>
</template>
<static-query>
query {
  data: allGraphData {
    edges {
      node {
        websiteImportance {
        name
        chartOptions {
          labels
          theme {
              mode
              palette
          }
        }
          series
      }
      }
    }
  }
}
</static-query>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        theme: {
          palette: "palette2"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
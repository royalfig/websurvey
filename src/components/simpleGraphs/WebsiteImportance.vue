<template>
  <div>
    <apexchart
      type="pie"
      height="300"
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
          series
          chartOptions {
            chart {
              type
              fontFamily
            }
            labels
            title {
              text
            }
            legend {
              position
              horizontalAlign
            }
          }
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
  }
};
</script>

<style lang="scss" scoped></style>

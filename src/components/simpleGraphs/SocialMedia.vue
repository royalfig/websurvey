<template>
  <apexchart
    type="pie"
    height="300"
    :options="$static.data.edges[0].node.socialMedia.chartOptions"
    :series="$static.data.edges[0].node.socialMedia.series"
  />
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        socialMedia {
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

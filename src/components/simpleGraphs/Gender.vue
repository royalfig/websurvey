<template>
  <apexchart
    height="300"
    type="pie"
    :options="$static.data.edges[0].node.gender.chartOptions"
    :series="$static.data.edges[0].node.gender.series"
  />
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        gender {
          series
          chartOptions {
            chart {
              type
              height
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

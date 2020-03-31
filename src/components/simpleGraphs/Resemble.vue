<template>
  <apexchart
    type="bar"
    height="350"
    :options="$static.data.edges[0].node.resemble.chartOptions"
    :series="$static.data.edges[0].node.resemble.series"
  />
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        resemble {
          series {
            data
          }
          chartOptions {
            chart {
              type
              fontFamily
            }
            title {
              text
              align
            }
            legend {
              position
              horizontalAlign
            }
            plotOptions {
              bar {
                horizontal
              }
            }
            xaxis {
              categories
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

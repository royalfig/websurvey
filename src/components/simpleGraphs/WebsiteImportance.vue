<template>
  <div>
    <apexcharts
      type="bar"
      height="350"
      :options="$static.data.edges[0].node.websiteImportance.chartOptions"
      :series="$static.data.edges[0].node.websiteImportance.series"
    ></apexcharts>
  </div>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        websiteImportance {
          series {
            name
            data
          }
          chartOptions {
            chart {
              type
              height
              stacked
              stackType
              fontFamily
            }
            plotOptions {
              bar {
                horizontal
              }
            }
            stroke {
              width
              colors
            }
            title {
              text
            }
            xaxis {
              categories
            }
            fill {
              opacity
            }
            legend {
              position
              horizontalAlign
              offsetX
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

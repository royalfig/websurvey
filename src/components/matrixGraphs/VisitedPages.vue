<template>
  <div>
    <apexchart
      type="bar"
      height="450"
      :options="$static.data.edges[0].node.visitedPages.chartOptions"
      :series="$static.data.edges[0].node.visitedPages.series"
    />
  </div>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        visitedPages {
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

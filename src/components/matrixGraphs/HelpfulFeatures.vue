<template>
  <div>
    <client-only>
      <apexchart
        type="bar"
        height="450"
        :options="$static.data.edges[0].node.helpfulFeatures.chartOptions"
        :series="$static.data.edges[0].node.helpfulFeatures.series"
      />
    </client-only>
  </div>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        helpfulFeatures {
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
            theme {
              palette
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  components: {
    Apexchart: () => import("vue-apexcharts")
  }
};
</script>

<style lang="scss" scoped></style>

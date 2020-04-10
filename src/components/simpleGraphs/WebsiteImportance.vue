<template>
  <div>
    <client-only>
      <apexchart
        type="pie"
        height="300"
        :options="$static.data.edges[0].node.websiteImportance.chartOptions"
        :series="$static.data.edges[0].node.websiteImportance.series"
      />
    </client-only>
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

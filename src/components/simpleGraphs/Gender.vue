<template>
  <client-only>
    <apexchart
      height="300"
      type="pie"
      :options="$static.data.edges[0].node.gender.chartOptions"
      :series="$static.data.edges[0].node.gender.series"
    />
  </client-only>
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

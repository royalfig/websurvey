<template>
  <client-only>
    <apexchart
      type="pie"
      height="300"
      :options="$static.data.edges[0].node.socialMedia.chartOptions"
      :series="$static.data.edges[0].node.socialMedia.series"
    />
  </client-only>
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
export default {
  components: {
    Apexchart: () => import("vue-apexcharts")
  }
};
</script>

<style lang="scss" scoped></style>

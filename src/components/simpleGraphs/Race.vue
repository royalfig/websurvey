<template>
  <client-only>
    <apexchart
      height="300"
      type="pie"
      :options="$static.data.edges[0].node.race.chartOptions"
      :series="$static.data.edges[0].node.race.series"
    />
  </client-only>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        race {
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

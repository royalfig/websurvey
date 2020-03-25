<template>
  <apexchart
    width="350"
    type="pie"
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
        name
        chartOptions {
          labels
          theme {
              palette
          }
          legend {
            position
          }
        }
          series
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

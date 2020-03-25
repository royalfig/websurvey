<template>
  <apexchart
    width="350"
    type="pie"
    :options="$static.data.edges[0].node.compBenefit.chartOptions"
    :series="$static.data.edges[0].node.compBenefit.series"
  />
</template>
<static-query>
query {
  data: allGraphData {
    edges {
      node {
        compBenefit {
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

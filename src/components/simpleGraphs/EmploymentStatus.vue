<template>
  <apexchart
    height="300"
    type="pie"
    :options="$static.data.edges[0].node.employmentStatus.chartOptions"
    :series="$static.data.edges[0].node.employmentStatus.series"
  />
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        employmentStatus {
          series 
          chartOptions {
            chart {
              type
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
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  }
};
</script>

<style lang="scss" scoped></style>

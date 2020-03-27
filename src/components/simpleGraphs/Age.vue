<template>
  <apexchart
    height="250"
    type="bar"
    :options="$static.data.edges[0].node.age.chartOptions"
    :series="$static.data.edges[0].node.age.series"
  />
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        age {
          title
          categories
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

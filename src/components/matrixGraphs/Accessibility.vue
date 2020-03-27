<template>
  <apexchart height="350" type="bar" :options="options" :series="series" />
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  props: ["options", "series"]
};
</script>

<style lang="scss" scoped></style>

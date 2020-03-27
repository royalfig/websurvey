<template>
  <section class="container">
    <h2 class="title is-2">Accessibility</h2>
    <accessibility-chart />
  </section>
</template>

<script>
import Accessibility from "~/components/matrixGraphs/Accessibility";
export default {
  components: {
    "accessibility-chart": Accessibility
  }
};
</script>

<style lang="scss" scoped></style>

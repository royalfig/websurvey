<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Accessibility</h2>
      <div class="box">
        <accessibility-chart />
      </div>
    </div>
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

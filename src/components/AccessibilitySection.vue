<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Accessibility</h2>
      <div class="box">
        <accessibility-chart />
      </div>
      <div class="box">
        <p class="title is-3">Comments on Accessibility</p>
        <access-comment />
      </div>
    </div>
  </section>
</template>

<script>
import Accessibility from "~/components/matrixGraphs/Accessibility";
import AccessComment from "~/components/AccessComment";
export default {
  components: {
    "accessibility-chart": Accessibility,
    AccessComment
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">User Experience</h2>
      <hr />
      <h3 class="title is-3">Site Visits</h3>
      <div class="box">
        <device-graph />
      </div>
      <div class="box">
        <visited-pages-graph />
      </div>
      <h3 class="title is-3">Site Experience</h3>
      <div class="box">
        <helpful-pages-graph />
      </div>
      <div class="box">
        <helpful-features-graph />
      </div>
      <div class="box">
        <comp-benefit-graph />
      </div>
    </div>
  </section>
</template>

<script>
import Device from "~/components/simpleGraphs/Device.vue";
import VisitedPages from "~/components/matrixGraphs/VisitedPages";
import HelpfulPages from "~/components/matrixGraphs/HelpfulPages";
import HelpfulFeatures from "~/components/matrixGraphs/HelpfulFeatures";
import CompBenefit from "~/components/simpleGraphs/CompBenefit";
export default {
  components: {
    "device-graph": Device,
    "visited-pages-graph": VisitedPages,
    "helpful-pages-graph": HelpfulPages,
    "helpful-features-graph": HelpfulFeatures,
    "comp-benefit-graph": CompBenefit
  }
};
</script>

<style lang="scss" scoped></style>

// How the site is used
// 	1. Device
// 	2. Visited Pages Matrix
// 	3. Visited Pages comment
// Usefulness
// 	1. Useful pages matrix
// 	2. List of useful pages
// 	3. List of nonuseful pages
// 	4. Useful features
// 	5. Wishlist
// Comp benefit radio
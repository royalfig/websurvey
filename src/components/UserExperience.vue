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
      <div class="box">
        <p class="title is-3">I also visit these pages...</p>
        <visited-pages-comment />
      </div>
      <h3 class="title is-3">Site Experience</h3>
      <div class="box">
        <helpful-pages-graph />
      </div>
      <div class="box">
        <helpful-features-graph />
      </div>
      <div class="box">
        <p class="title is-3">I also find the following pages...</p>
        <use-comments />
      </div>
      <div class="box">
        <p class="title is-3">I wish the HSS website had...</p>
        <wish-fulfillment />
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
import VisitedPagesComment from "~/components/VisitedPagesComment";
import HelpfulPages from "~/components/matrixGraphs/HelpfulPages";
import HelpfulFeatures from "~/components/matrixGraphs/HelpfulFeatures";
import WishFulfillment from "~/components/WishFulfillment";
import CompBenefit from "~/components/simpleGraphs/CompBenefit";
import UseComments from "~/components/UseComments";

export default {
  components: {
    "device-graph": Device,
    "visited-pages-graph": VisitedPages,
    "helpful-pages-graph": HelpfulPages,
    "helpful-features-graph": HelpfulFeatures,
    "comp-benefit-graph": CompBenefit,
    WishFulfillment,
    VisitedPagesComment,
    UseComments
  }
};
</script>

<style lang="scss" scoped></style>

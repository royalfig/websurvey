<template>
  <section class="container">
    <h2 class="title is-2">General</h2>
  </section>
</template>

<script>
import WebsiteImportance from "~/components/simpleGraphs/WebsiteImportance";
import SocialMedia from "~/components/simpleGraphs/SocialMedia";
import ShouldRedesign from "~/components/simpleGraphs/ShouldRedesign";
export default {
  components: {
    "website-importance-graph": WebsiteImportance,
    "social-media-graph": SocialMedia,
    "should-redesign-graph": ShouldRedesign
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">General</h2>
      <div class="columns">
        <div class="column">
          <p class="title is-3">Title</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis dolores eum magni cupiditate odio velit nobis facilis? Rerum eum provident quos fuga quisquam atque quae saepe magnam nulla eius.</p>
        </div>
        <div class="column">
          <div class="box">
            <should-redesign-graph />
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box">
            <website-importance-graph />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <social-media-graph />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WebsiteImportance from "~/components/simpleGraphs/WebsiteImportance";
import SocialMedia from "~/components/simpleGraphs/SocialMedia";
import ShouldRedesign from "~/components/simpleGraphs/ShouldRedesign";
export default {
  components: {
    "website-importance-graph": WebsiteImportance,
    "should-redesign-graph": ShouldRedesign,
    "social-media-graph": SocialMedia
  }
};
</script>

<style lang="scss" scoped></style>

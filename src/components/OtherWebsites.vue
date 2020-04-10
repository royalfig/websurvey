<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Related Websites</h2>
      <div class="columns">
        <div class="column">
          <p class="title is-4">What do other websites get right?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reiciendis dolores eum magni cupiditate odio velit nobis facilis?
            Rerum eum provident quos fuga quisquam atque quae saepe magnam nulla
            eius.
          </p>
        </div>
        <div class="column">
          <div class="box"></div>
        </div>
      </div>
      <div class="box">
        <resemble-graph />
      </div>
      <div class="box">
        <other-features />
      </div>
    </div>
  </section>
</template>

<script>
import Resemble from "~/components/simpleGraphs/Resemble";
import OtherFeatures from "~/components/simpleGraphs/OtherFeatures";
export default {
  components: {
    "resemble-graph": Resemble,
    "other-features": OtherFeatures
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="has-background-white-ter">
    <nav-element />
    <header-element />

    <main id="main" class="container__center">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navbar from "~/components/Navbar.vue";
import Header from "~/components/Header.vue";
export default {
  components: {
    "nav-element": Navbar,
    "header-element": Header
  }
};
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all";
$family-sans-serif: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
$primary: #666633;
$primary-invert: findColorInvert($primary);

$colors: (
  "primary": (
    $primary,
    $primary-invert
  )
);
.container__center {
  max-width: 992px;
  margin: 0 auto;
}
.box {
  height: 100%;
}
@import "bulma";
@import "buefy/src/scss/buefy";
</style>

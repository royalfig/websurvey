<template>
  <div class="has-background-white-ter">
    <nav-element />
    <header-element />

    <main id="main" class="container__center">
      <slot />
    </main>
    <back-to-top />
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
import BackToTop from "~/components/BackToTop.vue";
export default {
  components: {
    "nav-element": Navbar,
    "header-element": Header,
    BackToTop
  }
};
</script>

<style lang="scss">
@import "bulma/sass/utilities/_all";
$family-sans-serif: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
$primary: #666633;
$primary-invert: findColorInvert($primary);
$danger: #663333;
$primary-invert: findColorInvert($danger);
$volta: #b2b247;
$volta-invert: findColorInvert($volta);

$colors: (
  "primary": (
    $primary,
    $primary-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "volta": (
    $volta,
    $volta-invert
  )
);
.container__center {
  max-width: 992px;
  margin: 0 auto;
}
.box {
  height: 100%;
}
.button.top {
  position: fixed;
  z-index: 10;
  bottom: 1rem;
  right: 1rem;
}
@import "bulma";
@import "buefy/src/scss/buefy";
</style>

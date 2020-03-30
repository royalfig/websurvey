<template>
  <div class="has-background-white-ter">
    <header class="hero is-primary is-medium is-bold">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a href="https://hssonline.org" class="navbar-item">
                <g-image class="image" src="~/assets/logo.png" width="500" alt="HSS logo" />
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a href="#" class="navbar-item">Take the Survey</a>
                <a href="#" class="navbar-item">Donate</a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <b-icon icon="download"></b-icon>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">HSS Website Redesign Survey Results</h1>
          <h2 class="subtitle">Finding the Future of hssonline</h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class>
                <a>Introduction</a>
              </li>
              <li>
                <a>General</a>
              </li>
              <li>
                <a>User Experience</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main id="main">
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

<style lang="scss">
@import "bulma/sass/utilities/_all";
$family-sans-serif: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
.image {
  width: auto;
}
@import "bulma";
@import "buefy/src/scss/buefy";
</style>

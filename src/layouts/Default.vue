<template>
  <div>
    <header class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            HSS Website Redesign Survey Results
          </h1>
          <h2 class="subtitle">
            Finding the Future for
            <a href="https://hssonline.org" class="is-family-monospace"
              >hssonline.org</a
            >
          </h2>
        </div>
      </div>
    </header>
    <main class="section">
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

@import "bulma";
@import "buefy/src/scss/buefy";
</style>

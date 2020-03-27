<template>
  <div>
    <header class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            HSS Website Redesign Survey Results
          </h1>
          <h2 class="subtitle">
            A New Era for the History of Science
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

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: #eff4f7;
  /* color: #ffffff;
  background-color: #343f57; */
}

.layout {
  max-width: 750px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>

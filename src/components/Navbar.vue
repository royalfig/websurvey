<template>
  <b-navbar class="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <g-image class="image" src="~/assets/logo.png" width="500" alt="HSS logo" />
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item href="#">Home</b-navbar-item>
      <b-navbar-item href="#">About</b-navbar-item>
      <b-navbar-dropdown label="Results">
        <b-navbar-item href="#">General</b-navbar-item>
        <b-navbar-item href="#">Accessibility</b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-dark">
            <b-icon icon="heart" size="is-small" />
            <strong>Donate</strong>
          </a>
          <a class="button is-light">
            <b-icon icon="clipboard-text" />
            <strong>Take the Survey</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image {
  width: auto;
}
</style>
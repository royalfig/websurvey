<template>
  <div class="flag-card__container tile is-ancestor">
    <div
      class="tile is-parent "
      v-for="(item, idx) in $static.data.edges[0].node.flags.flag"
      :key="idx"
    >
      <div class="tile is-child notification flag-card">
        <div class="flag-card__top">
          <div
            v-for="x in $static.data.edges[0].node.flags.data[idx]"
            :key="x"
            class="flag-card__img"
            v-html="item"
          ></div>
        </div>
        <div class="flag-card__bottom">
          <p class="flag-card__text title is-5">
            {{ $static.data.edges[0].node.flags.names[idx] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        flags {
            flag
            data
            names
        }
    }
  }
}
}
</static-query>
<script>
export default {};
</script>

<style lang="scss" scoped>
.flag-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__container {
    align-items: stretch;
  }
  &__top {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 0;
  }
  &__img {
    height: 50px;
    width: 50px;
  }
  &__text {
    margin: 1rem 0 1rem 0;
    text-align: center;
  }
}
</style>

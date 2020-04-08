<template>
  <section>
    <b-collapse
      class="card"
      animation="slide"
      v-for="(item, index) of $static.data.edges[0].node.accessibilityComment"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">
          {{ index + 1 }}
        </p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          {{ item }}
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        accessibilityComment 
        }
      }
    }
  }

</static-query>

<script>
export default {
  data() {
    return {
      isOpen: 0
    };
  }
};
</script>

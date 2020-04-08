<template>
  <section>
    <b-tabs v-model="activeTab" :multiline="multiline">
      <template
        v-for="(tab, index) in $static.data.edges[0].node.redesignComments"
      >
        <b-tab-item :key="index" :label="tab.label">
          <div class="content">
            <ul>
              <li v-for="(i, idx) in tab.content" :key="idx">
                {{ i }}
              </li>
            </ul>
          </div>
        </b-tab-item>
      </template>
    </b-tabs>
  </section>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        redesignComments {
          label
          content
        }
        }
      }
    }
  }
</static-query>

<script>
export default {
  data() {
    return {
      activeTab: 0,

      multiline: true
    };
  }
};
</script>

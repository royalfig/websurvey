<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1>{{ $static.metaInfo }}</h1>
    <age-chart />
    <website-importance />
  </Layout>
</template>

<script>
import Age from "~/components/Age";
import WebsiteImportance from "~/components/WebsiteImportance";
export default {
  metaInfo: {
    title: "HSS Website Redesign Survey Results"
  },
  components: {
    "age-chart": Age,
    "website-importance": WebsiteImportance
  }
};
</script>

<style>
</style>

<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1 class="title">HSS Website Redesign Survey Results</h1>
    <general-section />
    <accessibility-section />
    <user-experience-section />
    <other-websites-section />
    <demographics-section />
  </Layout>
</template>

<script>
import General from "~/components/General.vue";
import Accessibility from "~/components/Accessibility.vue";
import UserExperience from "~/components/UserExperience.vue";
import OtherWebsites from "~/components/OtherWebsites.vue";
import Demographics from "~/components/Demographics.vue";
export default {
  metaInfo: {
    title: "HSS Website Redesign Survey Results"
  },
  components: {
    "general-section": General,
    "accessibility-section": Accessibility,
    "user-experience-section": UserExperience,
    "other-websites-section": OtherWebsites,
    "demographics-section": Demographics
  }
};
</script>

<style lang="scss">
.title {
  text-align: center;
}
.graph {
  &__container {
    display: flex;
    // height: 20rem;
    width: 100%;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    background: #eff4f7;
  }
  &__section-header {
    width: 100%;
    text-align: center;
  }
  &__heading {
    padding: 0.5rem;
    margin: 0;
    text-align: center;
  }
  &__item {
    flex: 1 1 500px;
    padding: 1.25rem;
    margin: 1rem;
    background: #fff;
    box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.05),
      1px 1px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
}
</style>

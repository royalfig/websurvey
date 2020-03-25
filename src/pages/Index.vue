<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1>HSS Website Redesign Survey Results</h1>
    <h2>Demographics</h2>
    <section class="graph__container">
      <div class="graph__item">
        <h3>Respondent Age</h3>
        <age-chart />
      </div>
      <div class="graph__item">
        <h3>Membership Status</h3>
        <membership-status />
      </div>
    </section>
    <h2>Redesign Sentiment</h2>
    <section class="graph__container">
      <div class="graph__item">
        <h3>Website Importance</h3>
        <website-importance />
      </div>
      <div class="graph__item">
        <h3>Social Media Presence</h3>
        <social-media />
      </div>
      <div class="graph__item">
        <h3>Comp Benefit</h3>
        <comp-benefit />
      </div>
    </section>
  </Layout>
</template>

<script>
import Age from "~/components/Age";
import WebsiteImportance from "~/components/WebsiteImportance";
import SocialMedia from "~/components/SocialMedia";
import CompBenefit from "~/components/CompBenefit";
import MembershipStatus from "~/components/MembershipStatus";
export default {
  metaInfo: {
    title: "HSS Website Redesign Survey Results"
  },
  components: {
    "age-chart": Age,
    "website-importance": WebsiteImportance,
    "social-media": SocialMedia,
    "comp-benefit": CompBenefit,
    "membership-status": MembershipStatus
  }
};
</script>

<style lang="scss">
.graph {
  &__container {
    display: flex;
    // height: 20rem;
    width: 100%;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }
  &__item {
    flex: 0 0 50%;
  }
}
</style>

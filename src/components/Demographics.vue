<template>
  <section class="section">
    <div class="container">
      <h2 class="title is-2">Demographics</h2>
      <div class="columns">
        <div class="column">
          <p class="title is-3">Why we collect demographic data</p>
          <p>Driven by our mission “to foster interest in the history of science,” the HSS collects demographic information to understand the composition of its submitting authors, members, and meeting attendees; to identify under-served and under-represented communities; to formulate strategies to increase representation across communities; and to communicate aggregate, anonymized demographic data to its members and the public.</p>
        </div>
        <div class="column">
          <p>We are cautious of the exploitation enabled by demographic data collection. Therefore, we are committed to collecting information in a manner that is voluntary, promotes self-description, and is purposeful. The information will be used by the program co-chairs to guide their construction of the program with the goal of achieving balance in demographic characteristics and maximizing representativeness among the society’s communities.</p>
          <p>The structure of this questionnaire is still in a pilot phase. We welcome your feedback via our contact form.</p>
          <p>–Committee on Diversity and Inclusion</p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box">
            <age-graph />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <employment-status-graph />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Age from "~/components/simpleGraphs/Age";
import EmploymentStatus from "~/components/simpleGraphs/EmploymentStatus";
export default {
  components: {
    "age-graph": Age,
    "employment-status-graph": EmploymentStatus
  }
};
</script>

<style lang="scss" scoped></style>

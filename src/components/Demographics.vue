<template>
  <section class="section">
    <div class="container">
      <h2 id="demographics" class="title is-2">Demographics</h2>
      <div class="columns">
        <div class="column">
          <p class="title is-4">Why we collect demographic data</p>
          <p>
            Driven by our mission “to foster interest in the history of
            science,” the HSS collects demographic information to understand the
            composition of its submitting authors, members, and meeting
            attendees; to identify under-served and under-represented
            communities; to formulate strategies to increase representation
            across communities; and to communicate aggregate, anonymized
            demographic data to its members and the public.
          </p>
        </div>
        <div class="column">
          <div class="content">
            <p>
              We are cautious of the exploitation enabled by demographic data
              collection. Therefore, we are committed to collecting information
              in a manner that is voluntary, promotes self-description, and is
              purposeful. The information will be used by the program co-chairs
              to guide their construction of the program with the goal of
              achieving balance in demographic characteristics and maximizing
              representativeness among the society’s communities.
            </p>
            <p>
              The structure of HSS demographic questions are still in a pilot
              phase. We welcome your feedback via our contact form.
            </p>
            <p class="has-text-right">&mdash;Committee on Diversity and Inclusion</p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box">
            <membership-status />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="title is-5">Become a Member</p>
            <p>The History of Science Society is the world’s largest society dedicated to understanding science, technology, medicine, and their interactions with society in historical context. In a world becoming increasingly interconnected by science and technology, contextualized understanding is crucial. Your membership supports an international effort to produce and disseminate leading knowledge about the history of science.</p>
            <a href="https://hssonline.org/membership/subscriptions/" class="button is-primary">
              <b-icon icon="account" />
              <p>Join the HSS</p>
            </a>
          </div>
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
      <div class="columns">
        <div class="column">
          <div class="box">
            <gender-graph />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <race-graph />
          </div>
        </div>
      </div>
      <div class="box">
        <p class="title is-4">Country of Residence</p>
        <country-residence />
      </div>
    </div>
  </section>
</template>

<script>
import Age from "~/components/simpleGraphs/Age";
import EmploymentStatus from "~/components/simpleGraphs/EmploymentStatus";
import MembershipStatus from "~/components/simpleGraphs/MembershipStatus";
import Gender from "~/components/simpleGraphs/Gender";
import Race from "~/components/simpleGraphs/Race";
import Flags from "~/components/Flags";
export default {
  components: {
    "age-graph": Age,
    "employment-status-graph": EmploymentStatus,
    "membership-status": MembershipStatus,
    "gender-graph": Gender,
    "race-graph": Race,
    "country-residence": Flags
  }
};
</script>

<style lang="scss" scoped>
.button {
  margin-top: 1rem;
  p {
    margin-left: 0.25rem;
  }
}
</style>

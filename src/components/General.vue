<template>
  <section class="section">
    <div class="container">
      <h2 id="general" class="title is-2">HSS Website Redesign</h2>
      <div class="columns">
        <div class="column">
          <p class="title is-4">General Responses</p>
          <div class="content">
            <p>
              The HSS website represents one of organization's primary conduits
              to achieve its mission of fostering interest in the history of
              science.
            </p>
            <p>
              The results of this website redesign survey are intended to
              determine whether the HSS website continues to fulfill its goal
              and to gauge what could be done to better serve the organization's
              members and the history of science community more widely.
            </p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <should-redesign-graph />
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="box">
            <website-importance-graph />
          </div>
        </div>
        <div class="column">
          <div class="box">
            <social-media-graph />
          </div>
        </div>
      </div>
      <div class="box">
        <p class="title is-4">The HSS should redesign its website...</p>
        <redesign-comments />
      </div>
    </div>
  </section>
</template>

<script>
import WebsiteImportance from "~/components/simpleGraphs/WebsiteImportance";
import SocialMedia from "~/components/simpleGraphs/SocialMedia";
import ShouldRedesign from "~/components/simpleGraphs/ShouldRedesign";
import RedesignComments from "~/components/RedesignComments";
export default {
  components: {
    "website-importance-graph": WebsiteImportance,
    "should-redesign-graph": ShouldRedesign,
    "social-media-graph": SocialMedia,
    RedesignComments
  }
};
</script>

<style lang="scss" scoped>
.response__header {
  padding: 1rem 0;
}
</style>

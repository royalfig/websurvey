<template>
  <section class="section">
    <div class="container">
      <h2 id="ux" class="title is-2">User Experience</h2>
      <div class="columns">
        <div class="column">
          This section considers user experience (UX); that is, where do users
          spend their time when visiting the HSS website and what is their
          experience during that time. Where is it enjoyable? Where is it
          frustrating? And features do users wish the site provided?
        </div>
        <div class="column">
          <div class="box content">
            <p class="title is-6">HSS Pages</p>
            <ul>
              <li>
                <a
                  href="https://hssonline.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Homepage</a
                >
              </li>
              <li>
                <a
                  href="https://hssmeeting.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Annual Meeting Website</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/meetings/other-conferences/?_orderby=conference_start_date"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Other Conferences Listing</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/resources/graduate-programs-in-history-of-science/"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Graduate Programs</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/resources/teaching/"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Teaching Resources</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/resources/publications/"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Newsletter</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/2020/01/27/oct-dec-2019/"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Isis Books Received</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/employment/job-listings/?_orderby=due_date"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Job Listings</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/employment/prizes/?_orderby=gp_app_deadline"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Grants &amp; Prizes</a
                >
              </li>
              <li>
                <a
                  href="https://hssonline.org/about/honors/"
                  rel="noopener noreferrer"
                  target="_blank"
                  >Honors &amp; Awards</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h3 class="title is-3">Site Visits</h3>
      <div class="box">
        <device-graph />
      </div>
      <div class="box">
        <visited-pages-graph />
      </div>
      <div class="box">
        <p class="title is-4">I also visit these pages...</p>
        <visited-pages-comment />
      </div>
      <h3 class="title is-3">Site Experience</h3>
      <div class="box">
        <helpful-pages-graph />
      </div>
      <div class="box">
        <helpful-features-graph />
      </div>
      <div class="box">
        <p class="title is-4">I also find the following pages...</p>
        <use-comments />
      </div>
      <div class="box">
        <p class="title is-4">I wish the HSS website had...</p>
        <wish-fulfillment />
      </div>
      <div class="box">
        <comp-benefit-graph />
      </div>
    </div>
  </section>
</template>

<script>
import Device from "~/components/simpleGraphs/Device.vue";
import VisitedPages from "~/components/matrixGraphs/VisitedPages";
import VisitedPagesComment from "~/components/VisitedPagesComment";
import HelpfulPages from "~/components/matrixGraphs/HelpfulPages";
import HelpfulFeatures from "~/components/matrixGraphs/HelpfulFeatures";
import WishFulfillment from "~/components/WishFulfillment";
import CompBenefit from "~/components/simpleGraphs/CompBenefit";
import UseComments from "~/components/UseComments";

export default {
  components: {
    "device-graph": Device,
    "visited-pages-graph": VisitedPages,
    "helpful-pages-graph": HelpfulPages,
    "helpful-features-graph": HelpfulFeatures,
    "comp-benefit-graph": CompBenefit,
    WishFulfillment,
    VisitedPagesComment,
    UseComments
  }
};
</script>

<style lang="scss" scoped></style>

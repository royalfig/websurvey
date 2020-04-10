<template>
  <section class="section">
    <div class="container">
      <h2 id="accessibility" class="title is-2">Accessibility</h2>
      <div class="columns">
        <div class="column">
          <p>
            A principal concern in evaluating the History of Science Society's
            website is to ensure compliance with
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              >Web Content Accessibility Guidelines (WCAG)</a
            >. These questions assess the accessibility of the current HSS
            website. Additional concerns are listed at the end of this section.
          </p>
        </div>
        <div class="column">
          <div class="box">
            <p class="title is-6">Some Accessibility Resources on the Web</p>
            <ul>
              <li>
                <a href="https://www.a11ywithlindsey.com/blog"
                  >A11y with Lindsay</a
                >
                (accessibility blog)
              </li>

              <li>
                🎙️
                <a href="https://www.relay.fm/presentable/30"
                  >Accessibility is Social Justice</a
                >
                (Presentable Podcast)
              </li>
              <li>
                <a
                  href="https://www.mediacurrent.com/blog/wai-aria-attributes-best-practices/"
                  >An Introduction to WAI-ARIA Best Practices</a
                >
              </li>
              <li>
                <a
                  href="https://medium.com/valtech-design/inclusive-design-dd4e03f82094"
                  >Inclusive Design</a
                >
              </li>
              <li>
                <a
                  href="https://developers.google.com/web/fundamentals/accessibility/"
                  >Google's Guide to Accessibility</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="box">
        <accessibility-chart />
      </div>
      <div class="box">
        <p class="title is-4">Comments on Accessibility</p>
        <access-comment />
      </div>
    </div>
  </section>
</template>

<script>
import Accessibility from "~/components/matrixGraphs/Accessibility";
import AccessComment from "~/components/AccessComment";
export default {
  components: {
    "accessibility-chart": Accessibility,
    AccessComment
  }
};
</script>

<style lang="scss" scoped></style>

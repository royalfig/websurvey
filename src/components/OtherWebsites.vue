<template>
  <section class="section">
    <div class="container">
      <h2 id="related" class="title is-2">Related Websites</h2>
      <div class="columns">
        <div class="column">
          <p class="title is-4">What do other websites get right?</p>
          <p>
            What can the HSS learn from other academic organizations? Which
            features or services are they offering that their communities find
            useful, beneficial, or enjoyable?
          </p>
        </div>
        <div class="column">
          <div class="box">
            <div class="content">
              <p class="title is-6">Related Websites</p>
              <ul>
                <li>
                  <a href="https://4sonline.org/" rel="noopener" target="_blank"
                    >Society for Social Studies of Science</a
                  >
                </li>
                <li>
                  <a href="https://www.aaas.org/" rel="noopener" target="_blank"
                    >American Association for the Advancement of Science</a
                  >
                </li>
                <li>
                  <a
                    href="https://historians.org"
                    rel="noopener"
                    target="_blank"
                    >American Historical Association</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.bshs.org.uk/"
                    rel="noopener"
                    target="_blank"
                    >British Society for the History of Science</a
                  >
                </li>
                <li>
                  <a href="https://eshs.org" rel="noopener" target="_blank"
                    >European Society for the History of Science</a
                  >
                </li>
                <li>
                  <a href="https://philsci.org" rel="noopener" target="_blank"
                    >Philosophy of Science Association</a
                  >
                </li>
                <li>
                  <a
                    href="https://historyoftechnology.org"
                    rel="noopener"
                    target="_blank"
                    >Society for the History of Technology</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <resemble-graph />
      </div>
      <div class="box">
        <other-features />
      </div>
    </div>
  </section>
</template>

<script>
import Resemble from "~/components/simpleGraphs/Resemble";
import OtherFeatures from "~/components/simpleGraphs/OtherFeatures";
export default {
  components: {
    "resemble-graph": Resemble,
    "other-features": OtherFeatures
  }
};
</script>

<style lang="scss" scoped></style>

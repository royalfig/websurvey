<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <h1 class="title">HSS Website Redesign Survey Results</h1>
    <section class="graph__container">
      <h2 class="graph__section-header">Demographics</h2>
      <div class="graph__item">
        <h3 class="graph__heading">What is your age?</h3>
        <age-chart
          :options="$static.data.edges[0].node.age.chartOptions"
          :series="$static.data.edges[0].node.age.series"
        />
      </div>
      <div class="graph__item">
        <h3 class="graph__heading">Are you a member of the HSS?</h3>
        <membership-status
          :options="$static.data.edges[0].node.membershipStatus.chartOptions"
          :series="$static.data.edges[0].node.membershipStatus.series"
        />
      </div>
    </section>
    <section class="graph__container">
      <h2 class="graph__section-header">Redesign Sentiment</h2>
      <div class="graph__item">
        <h3 class="graph__heading">Is the HSS website important?</h3>
        <website-importance
          :options="$static.data.edges[0].node.websiteImportance.chartOptions"
          :series="$static.data.edges[0].node.websiteImportance.series"
        />
      </div>
      <div class="graph__item">
        <h3 class="graph__heading">
          Should the HSS increase its social media presence?
        </h3>
        <social-media
          :options="$static.data.edges[0].node.socialMedia.chartOptions"
          :series="$static.data.edges[0].node.socialMedia.series"
        />
      </div>
      <div class="graph__item">
        <h3 class="graph__heading">Should the HSS redesign its website?</h3>
        <should-redesign
          :options="$static.data.edges[0].node.shouldRedesign.chartOptions"
          :series="$static.data.edges[0].node.shouldRedesign.series"
        />
      </div>
      <div class="graph__item">
        <h3 class="graph__heading">
          Would you benefit from a site that published essays and/or blog posts
          on digital and other resources?
        </h3>
        <comp-benefit
          :options="$static.data.edges[0].node.compBenefit.chartOptions"
          :series="$static.data.edges[0].node.compBenefit.series"
        />
      </div>
    </section>
  </Layout>
</template>
<static-query>
query {
  data: allGraphData {
    edges {
      node {
        age {
          name
          chartOptions {
            xaxis {
              categories
            }
            theme {
              palette
            }
            legend {
              position
            }
            plotOptions {
              bar {
                horizontal
              }
            }
          }
          series {
            name
            data
          }
        }

        compBenefit {
          name
          chartOptions {
            xaxis {
              categories
            }
            theme {
              palette
            }
            legend {
              position
            }
            plotOptions {
              bar {
                horizontal
              }
            }
          }
          series {
            name
            data
          }
        }

        membershipStatus {
          name
          chartOptions {
            xaxis {
              categories
            }
            theme {
              palette
            }
            legend {
              position
            }
            plotOptions {
              bar {
                horizontal
              }
            }
          }
          series {
            name
            data
          }
        }
        shouldRedesign {
          name
          chartOptions {
            xaxis {
              categories
            }
            theme {
              palette
            }
            legend {
              position
            }
            plotOptions {
              bar {
                horizontal
              }
            }
          }
          series {
            name
            data
          }
        }
        socialMedia {
          name
          chartOptions {
            xaxis {
              categories
            }
            theme {
              palette
            }
            legend {
              position
            }
            plotOptions {
              bar {
                horizontal
              }
            }
          }
          series {
            name
            data
          }
        }
        websiteImportance {
          name
          chartOptions {
            xaxis {
              categories
            }
            theme {
              palette
            }
            legend {
              position
            }
            plotOptions {
              bar {
                horizontal
              }
            }
          }
          series {
            name
            data
          }
        }
      }
    }
  }
}

</static-query>
<script>
import Age from "~/components/Age";
import WebsiteImportance from "~/components/WebsiteImportance";
import SocialMedia from "~/components/SocialMedia";
import CompBenefit from "~/components/CompBenefit";
import MembershipStatus from "~/components/MembershipStatus";
import ShouldRedesign from "~/components/ShouldRedesign";
export default {
  metaInfo: {
    title: "HSS Website Redesign Survey Results"
  },
  components: {
    "age-chart": Age,
    "website-importance": WebsiteImportance,
    "social-media": SocialMedia,
    "comp-benefit": CompBenefit,
    "membership-status": MembershipStatus,
    "should-redesign": ShouldRedesign
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
    // flex: 0 0 500px;
    padding: 0.5rem;
    margin: 0.5rem;
    background: #eee;
    border-radius: 9px;
  }
}
</style>

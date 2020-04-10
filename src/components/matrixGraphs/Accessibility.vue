<template>
  <div>
    <client-only>
      <apexchart
        type="bar"
        height="350"
        :options="$static.data.edges[0].node.accessibility.chartOptions"
        :series="$static.data.edges[0].node.accessibility.series"
      />
    </client-only>
  </div>
</template>

<static-query>
query {
  data: allGraphData {
    edges {
      node {
        accessibility {
          series {
            name
            data
          }
          chartOptions {
            theme {
              palette
            }
            chart {
              type
              height
              stacked
              stackType
              fontFamily
            }
            plotOptions {
              bar {
                horizontal
              }
            }
            stroke {
              width
              colors
            }
            title {
              text
              align
            }
            xaxis {
              categories
            }
            fill {
              opacity
            }
            legend {
              position
              horizontalAlign
              offsetX
            }
          }
        }
      }
    }
  }
}

</static-query>

<script>
// import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    Apexchart: () => import("vue-apexcharts")
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

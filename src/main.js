// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";

export default function(Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto"
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
  });
}

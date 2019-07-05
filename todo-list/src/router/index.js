import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Main",
      path: "/",
      component: () => import("@/pages/Main"),
    },
    {
      name: "Home",
      path: "/home",
      component: () => import("@/pages/Home"),
    },
  ]
});

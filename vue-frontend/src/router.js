import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/events",
      name: "events",
      // route level code-splitting
      // this generates a separate chunk (events.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "events" */ "./views/Events.vue")
    },
    {
      path: "/activities",
      name: "activities",
      component: () =>
        import("./views/Activities.vue")
    },
    {
      path: "/faculty",
      name: "faculty",
      component: () =>
        import("./views/Faculty.vue")
    },
    {
      path: "/education",
      name: "education",
      component: () =>
        import("./views/Education.vue")
    },
    {
      path: "/resources",
      name: "resources",
      component: () =>
        import("./views/Resources.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import("./views/Contact.vue")
    },
  ]
});

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import HomePage from "@/pages/HomePage.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/init",
    name: "init",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: AboutView,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

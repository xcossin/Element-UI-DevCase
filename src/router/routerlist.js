import AboutView from "../views/AboutView.vue";
import HomePage from "@/pages/HomePage.vue";

// elemet-ui组件
import ElUpLoad from "@/elComponents/ElUpLoad.vue";

export const routes = [
  {
    path: "/index",
    name: "home",
    component: HomePage,
    children: [
      { path: "/upLoad", component: ElUpLoad }, //嵌套的二级路由前面不用加斜杠/     /index/my
      { path: "/upLoad", component: ElUpLoad },
      // { path: "shop", component: shop }, //   /index/shop
      // { path: "cates", component: cates },
      // { path: "home", component: home },
      //嵌套的二级路由重定向不用加*
      // { path: "", redirect: "/" },
    ],
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
  { path: "*", redirect: "/index" },
];

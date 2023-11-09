import AboutView from "../views/AboutView.vue";
import HomePage from "@/pages/HomePage.vue";

// elemet-ui组件
import ElUpLoad from "@/elComponents/ElUpLoad/ElUpLoad.vue";
// import ElTree from "@/elComponents/ElTree.vue";

export const routes = [
  {
    path: "/index",
    name: "home",
    component: HomePage,
    meta: {
      routerName: "首页",
    },
    children: [
      {
        path: "/uploadCom",
        component: ElUpLoad,
        meta: { routerName: "Upload 上传" },
      },
      //嵌套的二级路由重定向不用加*
      { path: "", redirect: "/uploadCom" },
    ],
    // children: [
    //   {
    //     path: "/uploadCom",
    //     component: ElUpLoad,
    //     meta: { routerName: "Upload 上传" },
    //   },
    //   //嵌套的二级路由前面不用加斜杠/     /index/upLoad
    //   {
    //     path: "/treeCom",
    //     component: ElTree,
    //     meta: { routerName: "Upload 上传" },
    //   },
    //   // { path: "shop", component: shop }, //   /index/shop
    //   // { path: "cates", component: cates },
    //   // { path: "home", component: home },
    //   //嵌套的二级路由重定向不用加*
    //   { path: "", redirect: "/index" },
    // ],
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

import Vue from "vue";
import VueRouter from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import('@/pages/HomePage.vue'),
    redirect: "/index/elementCom/uploadCom",
    children: [
      // element用相对路径
      {
        path: 'elementCom',
        component: () => import('@/pages/ElementHome.vue'),
        children:[
          {
            path: 'uploadCom',
            component: () => import('@/components/ElementCom/ElUpLoad/ElUpLoad.vue')
          },
        ]
      },
      /*
        高德组件用绝对路径-测试
        这种情况下地址不需要再加index
      */
      {
        path: '/gdMapHome',
        component: () => import('@/pages/GdMapHome.vue'),
        // redirect: '/index/gdMapHome/gdMapFun',
        children:[
          {
            path: '/gdMapHome/gdMapFun',
            component: () => import('@/components/GdMapCom/GdMap/gdMap.vue')
          },
        ]
      },
    ]
  },
  { path: "*", redirect: "/index" },
]

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

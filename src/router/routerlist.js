
import HomePage from "@/pages/HomePage.vue";
import {
  ElementComRouters,
  EchartsComRouters
} from "./router.config.js";

export const routes = [
  {
    path: "/",
    redirect: "/ElementCom",
    // component: () => import('@/pages/HomePage.vue'),
  },
  // ElemntUI组件
  ...ElementComRouters,
  ...EchartsComRouters,
  { path: "*", redirect: "/ElementCom" },
];

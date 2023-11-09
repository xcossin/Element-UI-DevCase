import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入  rem.js 详见说明文件：rem_README
import "./utils/rem.js";
/* 统一引入css文件 */
import "./utils/importCss";
/* 完整引入Element-ui */
import ElementUI from "element-ui";
Vue.use(ElementUI);

/* 按需引入Element-UI */
/* import { installElement } from "@/utils/element";
import "element-ui/lib/theme-chalk/index.css";
installElement(Vue); */
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

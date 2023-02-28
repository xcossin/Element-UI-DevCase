import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
/* 统一引入css文件 */
import "./utils/importCss";
/* 引入Element-UI */
import { installElement } from "@/utils/element";
installElement(Vue);
Vue.config.productionTip = false;
// Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

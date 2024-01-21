<template>
  <div class="home-page">
    <div class="com-body-box d-flex h100">
      <!-- 侧边导航 -->
      <SideNavbar :routerList="routerList" />
      <!-- 路由内容 -->
      <div class="com-body-con flex-1 h100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from "@/components/layout/SideNavbar.vue";
import { routes } from "@/assets/consts/consts";
export default {
  components: {
    SideNavbar
  },
  data() {
    return {
      routes,
      routerList:[]
    };
  },
};
</script>

<style lang="stylus" scoped>
.home-page
  width 100vw
  height 100vh
  position: relative
  background: #ffffff
  .com-body-con
    padding .25rem
</style>

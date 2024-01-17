<template>
  <div class="home-page">
    <!-- 顶部导航 -->
    <TopNavbar />
    <div class="d-flex h100">
      <!-- 侧边导航 -->
      <SideNavbar />
      <!-- 路由内容 -->
      <div class="context flex-1 h100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "@/components/layout/TopNavbar.vue";
import SideNavbar from "@/components/layout/SideNavbar.vue";
import { routes } from "@/assets/consts/consts";
export default {
  components: {
    TopNavbar,
    SideNavbar,
  },
  data() {
    return {
      routes,
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
  .context
    padding .2rem
</style>

<template>
  <div class="home-page">
    <!-- 顶部导航 -->
    <TopNavbar />
    <div class="home-botton d-flex h100">
      <!-- 侧边导航 -->
      <SideNavbar />
      <div class="context flex-1 h100">
        <router-view />
      </div>
    </div>

    <!-- <div class="left-top">left-top</div>
    <div class="right-bottom">right-bottom</div> -->
  </div>
</template>

<script>
import TopNavbar from "@/components/layout/TopNavbar.vue";
import SideNavbar from "@/components/layout/SideNavbar.vue";
// import vSide from "@/homeComponents/vSide.vue";
// import vHeader from "@/homeComponents/vHeader.vue";
import { routes } from "@/assets/consts/consts";
export default {
  components: {
    TopNavbar,
    SideNavbar,
    // vSide,
    // vHeader,
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

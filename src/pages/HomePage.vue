<template>
  <div class="home-page">
    <!-- 顶部导航 -->
    <TopNavbar />
    <div class="body-box d-flex h100">
      <!-- 一级路由内容 -->
      <div class="sub-body-con flex-1 h100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from "@/components/layout/TopNavbar.vue";
import { routes } from "@/assets/consts/consts";
export default {
  components: {
    TopNavbar,
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
  display: flex
  flex-direction: column
  overflow: hidden
  .body-box
    // margin-top .1rem
    flex: 1
    overflow: hidden
</style>

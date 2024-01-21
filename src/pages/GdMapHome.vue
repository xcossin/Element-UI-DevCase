<template>
  <div class="home-page">
    <div class="d-flex h100">
      <!-- 路由内容 -->
      <span>高德首页</span>
      <div class="context flex-1 h100">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from "@/assets/consts/consts";
export default {
  components: {
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

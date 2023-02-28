<template>
  <el-container>
    <el-aside width="200px">
      <v-side></v-side>
    </el-aside>
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-main class="div-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vSide from "@/homeComponents/vSide.vue";
import vHeader from "@/homeComponents/vHeader.vue";
import { routes } from "@/assets/consts/consts";
export default {
  components: {
    vSide,
    vHeader,
  },
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="stylus" scoped>
.el-container
  height 100vh
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  // height 100vh
}

.el-main {
  background-color: #ffffff;
  color: #333;
  height 100%
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

<template>
  <div class="side">
    <el-col :span="24" class="title">
      <div class="grid-content bg-purple">Element-UI案例</div>
    </el-col>
    <el-col :span="24">
      <!--  default-active 默认激活的对应的index -->
      <!-- router:是否开启路由模式，开启后会以index属性作为路径跳转 -->
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="(item, i) in routers"
          :index="i + ''"
          :key="item.path"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.routerName }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
// 引入vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";
import { routers } from "@/assets/consts/consts";
export default {
  data() {
    return {
      routers,
      defaultActive: "0",
    };
  },
  created() {
    console.log("routes", this.routers);
  },
  // 辅助函数的作用：将store中的state、getters、mutations、actions映射到组建中，方便使用
  computed: {
    // mapGetters和mapStates将数据映射到组件中的computed中，当做自己的数据来使用
    ...mapGetters(["myMenus"]),
  },
  methods: {
    // mapMutation和mapActions将函数映射到自己按，当做自己的函数来用
    ...mapMutations(["cleatUserInfo"]),
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style lang="stylus" scoped>
.side
  overflow: hidden
.title
  width: 100%;
  text-align: center;
  color: #fff;
  background: #444444;
  height: 60px;
  line-height: 60px;
.el-menu {
  border-right: 0px;
}
.el-submenu__title {
  height: 45px;
  line-height: 45px;
}
.el-submenu .el-menu-item {
  /* min-width: 0; */
  color: #fff;
  height: 45px;
  line-height: 45px;
}
/* .el-menu-item {
  background-color: #fb6d49;
}
.el-menu-item .is-active {
  background-color: #fb6d49;
}
.el-submenu .item_el-menu:hover {
  background: #fb6d49 !important;
} */
</style>

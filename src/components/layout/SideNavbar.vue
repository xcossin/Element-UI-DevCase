<template>
  <div class="side-wrap">
    <el-row>
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { headerRouterPath } from "@/assets/consts/consts";
// 引入vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      isCollapse: true,
      headerRouterPath: [],
      routerBtnList: [
        { label: "El样式", routerPath: "" },
        { label: "El样式", routerPath: "" },
        { label: "其他样式案例", routerPath: "" },
        { label: "El样式", routerPath: "" },
        { label: "El样式", routerPath: "" },
        { label: "El样式", routerPath: "" },
      ],
      first_menus: [],
      second_menu: [],
    };
  },
  created() {},
  // 辅助函数的作用：将store中的state、getters、mutations、actions映射到组建中，方便使用
  computed: {
    // mapGetters和mapStates将数据映射到组件中的computed中，当做自己的数据来使用
    ...mapGetters(["myMenus"]),
  },
  methods: {
    // mapMutation和mapActions将函数映射到自己按，当做自己的函数来用
    ...mapMutations(["cleatUserInfo"]),
    logout() {
      this.$store.commit("cleatUserInfo");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="stylus" scoped>
.side-wrap
  width: 1.3rem;
  display:flex;
  // background: #5191f7
  border-right .01rem solid #e0e5f0
  /* Rectangle */
  box-shadow: inset -0.39px 0px 0px 0px #DFE5F1;
  overflow: hidden;
</style>

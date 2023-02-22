<template>
  <div class="side">
    <el-col :span="24" class="title"
      ><div class="grid-content bg-purple">小U商城后台系统</div></el-col
    >
    <el-col :span="24">
      <!--  default-active 默认激活的对应的index -->
      <!-- router:是否开启路由模式，开启后会以index属性作为路径跳转 -->
      123
    </el-col>
  </div>
</template>

<script>
// 引入vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      first_menus: [],
      second_menu: [],
    };
  },
  created() {
    this.$http
      .get("/menulist?istree=1")
      .then((res) => {
        this.first_menus.push(res.list[0]);
        this.second_menu.push(res.list[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
  },
};
</script>

<style lang="stylus" scoped>
.side {
  overflow: hidden;
}
.title {
  width: 100%;
  text-align: center;
  color: #fff;
  background: #444444;
  height: 60px;
  line-height: 60px;
}
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
.el-menu-item {
  background-color: #fb6d49;
}
.el-menu-item .is-active {
  background-color: #fb6d49;
}
.el-submenu .item_el-menu:hover {
  background: #fb6d49 !important;
}
</style>

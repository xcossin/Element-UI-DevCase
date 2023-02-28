<template>
  <div class="">
    <el-col :span="24" class="">
      <div class="">头部</div>
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

<template>
  <div class="side">
    <div class="side-item" v-for="item in routerSilders" :key="item.path">
      <!-- <span @click="goToPath(item)">{{ item.routerName }}</span> -->
      <div>{{ item.routerName }}</div>
    </div>
  </div>
</template>

<script>
// 引入vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";
import { routerSilders } from "@/assets/consts/consts";
export default {
  data() {
    return {
      routerSilders,
      defaultActive: "1",
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
    /**
     * @name 王本灿
     * @Date 2023-06-26 16:45:47
     * @introduction 展示二级路由
     * @description 详细描述
     * @param {参数类型} itemInfo 项信息
     */
    goToPath(itemInfo) {
      console.log("itemInfo", itemInfo);
    },
  },
};
</script>

<style lang="stylus" scoped>
.side
  overflow: hidden
  padding 10px 0
  height 100%
  .side-item
    cursor pointer
    span
      display inline-block
      padding:10px
  .side-item:hover
    background: #79a1e3;
  .side-item + .side-item
    margin-top: 10px
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
</style>

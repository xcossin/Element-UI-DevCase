<template>
  <div class="header-wrap">
    <div class="logo"></div>
    <div class="router-btn">
      <!-- <div class="btn-item" v-for="(item, ind) in headerRouterPath" :key="ind">
        <span>{{ item.typeName }}</span>
      </div> -->
    </div>
    <div class="login"></div>
  </div>
</template>

<script>
// import { headerRouterPath } from "@/assets/consts/consts";
// 引入vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
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
  },
};
</script>

<style lang="stylus" scoped>
.header-wrap{
  height: 100%;
  display:flex;
  .logo{
    width: .5rem;
  }
  .router-btn{
    width: auto;
    display:flex;
    .btn-item + .btn-item{
      margin-left: 10px
    }
  }
  .login{
    width: 1rem;

  }
}
</style>

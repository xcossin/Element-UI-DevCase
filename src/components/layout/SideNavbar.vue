<template>
  <div class="side-wrap">
    <el-menu
      :default-active="defaultActive"
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="(item,index) in menuList" :key="index">
        <el-submenu 
          v-if="item.isHaveGroup" 
          :index="String(index)" >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.navigationName}}</span>
          </template>
          <div v-if="item.isHaveGroup">
            <el-menu-item-group 
              v-for="(groupItem,groupIndex) in item.groupList" 
              :key="groupIndex">
              <template slot="title">{{groupItem.groupName}}</template>
              <!-- <el-menu-item
                v-for="(menuItem,menuIndex) in groupItem.menuList"
                :key="menuIndex"
                :index="String(index) + '-' + String(groupIndex + menuIndex)"
                :index="String(index) + '-' + calculate(item.groupList,groupIndex,menuItem,menuIndex)"
                @click="handlClick(item.isHaveGroup,menuItem)" >
              </el-menu-item> -->
              <el-menu-item
                v-for="(menuItem,menuIndex) in groupItem.menuList"
                :key="menuIndex"
                :index="String(index) + '-' + menuItem.menuIndex"
                @click="handlClick(item.isHaveGroup,menuItem)" >
                {{menuItem.menuName}}
              </el-menu-item>
            </el-menu-item-group>
          </div>
        </el-submenu>
        <el-menu-item 
          v-else
          :index="String(index)"
          @click="handlClick(item.isHaveGroup,item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.navigationName}}</span>
        </el-menu-item>
      </div>
      
    </el-menu>
  </div>
</template>

<script>
import { elementRouterList } from "@/assets/consts/consts.js";
// 引入vuex的辅助函数
import { mapGetters, mapMutations } from "vuex";

export default {
  props:{
    routerList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      defaultActive:'1-1',
      openeds:['1'],
      first_menus: [],
      second_menu: [],
    };
  },
  created() {},
  // 辅助函数的作用：将store中的state、getters、mutations、actions映射到组建中，方便使用
  computed: {
    // mapGetters和mapStates将数据映射到组件中的computed中，当做自己的数据来使用
    ...mapGetters(["myMenus"]),
    menuList() {
      let list = []
      if(this.$route.path.includes('elementCom')){
        list = elementRouterList
      }else{
        list = []
      }
      return list;
    },
  },
  methods: {
    // mapMutation和mapActions将函数映射到自己按，当做自己的函数来用
    ...mapMutations(["cleatUserInfo"]),
    calculate(groupList,groupIndex,menuItem,menuIndex){
      groupList
      return String()
    },
    handlClick(isHaveGroup,itemInfo){
      console.log('isHaveGroup,itemInfo', isHaveGroup,itemInfo)
    },
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
  width: 1.8rem;
  display:flex;
  border-right .01rem solid #e0e5f0
  box-shadow: inset -0.39px 0px 0px 0px #DFE5F1;
  overflow: hidden;
  .el-menu-vertical-demo
    width 100%
</style>

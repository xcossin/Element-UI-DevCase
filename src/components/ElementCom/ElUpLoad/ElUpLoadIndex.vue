<!-- 更新组件说明
  提供了: xxx
 -->
<!--
  属性说明

 -->
<template>
  <div class="component-content">
    <div class="component-content-box">
      <h2>Upload 组件</h2>
      <!-- <el-divider></el-divider> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="获取二进制文件" name="ElUploadCard1"></el-tab-pane>
        <el-tab-pane label="隐藏移除添加时的动画" name="ElUploadCard2"></el-tab-pane>
        <el-tab-pane label="覆盖默认的上传行为并压缩" name="ElUploadCard3"></el-tab-pane>
        <el-tab-pane label="" name="ElUploadCard4"></el-tab-pane>
      </el-tabs>
      <div class="com-content-item">
        <component :is="activeName"></component>
      </div>
    </div>
  </div>
</template>

<script>
import imgCompress from "./ElUpload3/imgCompress";
import ElUploadCard1 from "@/components/ElementCom/ElUpLoad/ElUploadCard1.vue";
import ElUploadCard2 from "@/components/ElementCom/ElUpLoad/ElUploadCard2.vue";
import ElUploadCard3 from "@/components/ElementCom/ElUpLoad/ElUpload3/ElUploadCard3.vue";

export default {
  name: "ElUpLoad",
  components:{
    ElUploadCard1,
    ElUploadCard2,
    ElUploadCard3
  },
  mixins: [imgCompress],
  data() {
    return {
      activeName: "ElUploadCard1",
    };
  },
  methods: {
    handleClick(el) {
      this.isActiveName = el.name;
    },
  },
};
</script>

<style lang="stylus" scoped>
.component-content
  size 100% 100%
  padding .25rem 0 .25rem .25rem
  overflow hidden
  .component-content-box
    size 100% 100%
    display: flex
    flex-direction: column
    .com-content-item
      flex 1
      overflow: auto
      display: flex
</style>

<template>
  <div class="logo">
    <img class="header-logo" src="../assets/images/header/logo.svg" alt="" />
  </div>
</template>

<script>
// import xxx from './xxx'
export default {
  // 父组件通过 props 向下传递数据给子组件
  // props: {},
  // import引入的组件需要注入此处能使用
  // components: {},
  // 此处存放数据
  data() {
    return {};
  },
  // 计算属性
  // computed: {},
  // 监听data中数据变化
  // watch: {},
  // 生命周期 - 创建完成
  // created () {},
  // 生命周期 - 挂载完成
  mounted() {
    this.drawSvgAni();
  },
  // 生命周期 - 创建之前
  // beforeCreate () {},
  // 生命周期 - 挂载之前
  // beforeMount () {},
  // 生命周期 - 更新之前
  // beforeUpdate () {},
  // 生命周期 - 更新之后
  // updated () {},
  // 生命周期 - 销毁之前
  // beforeDestroy () {},
  // 生命周期 - 销毁完成
  // destroyed () {},
  // 若页面有keep-alive缓存，此函数会触发
  // activated () {},
  // 方法集合
  methods: {
    /**
     * @name 王本灿
     * @Date 2023-05-29 12:30:35
     * @introduction 绘制logo路径
     * @description 详细描述
     * @param {参数类型} 参数 参数说明
     */
    drawSvgAni() {
      // const logo = document.querySelectorAll("#logo path");
    },
  },
};
</script>
<style lang="stylus" scoped></style>

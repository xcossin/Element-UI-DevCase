/* 
  顶部导航按钮:
  控制一级路由切换
*/
const headerRouterPath = [
  {
    typeName: "Element-ui",
    path: "/ElementUiDemo",
    icon: "",
    acIcon: "",
  },
  {
    typeName: "Echarts",
    path: "/EchartsDemo",
    icon: "",
    acIcon: "",
  },
];

/* 
  侧边栏路由：
  展示组件模块相关内容
*/
const routerSilders = [
  {
    routerName: "上传组件",
    path: "/uploadCom",
    icon: "",
    acIcon: "",
  },
  {
    routerName: "树形控件",
    path: "/treeCom",
    icon: "",
    acIcon: "",
  },
];

export { headerRouterPath, routerSilders };

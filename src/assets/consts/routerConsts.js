/* 
  顶部导航按钮:
  控制一级路由切换
*/
export const elementRouterList = [
  {
    navigationName: "首页",
    path: "/element/elementHome",
    icon: "el-icon-s-home",
    acIcon: "el-icon-s-home",
    isHaveGroup:false,
    groupList:[],
  },
  {
    navigationName: "Element组件",
    path: "/elementCom",
    icon: "el-icon-s-help",
    acIcon: "el-icon-s-help",
    isHaveGroup:true,
    groupList:[
      {
        groupName:'分组1',
        menuList:[
          {
            menuName:'el-upload 上传组件',
            path:"uploadCom",
            belongTo:'分组1',
            menuIndex:1,
          },
          {
            menuName:'上传组件2',
            path:"uploadCom",
            belongTo:'分组1',
            menuIndex:2,
          }
        ],
      },
      {
        groupName:'分组2',
        menuList:[
          {
            menuName:'表格组件1',
            path:"uploadCom",
            belongTo:'分组2',
            menuIndex:3,
          }
        ],
      },
      {
        groupName:'分组3',
        menuList:[
          {
            menuName:'图片组件',
            path:"uploadCom",
            belongTo:'分组3',
            menuIndex:4,
          }
        ],
      },
    ]
  },
]
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


import { elementComRouters } from "./elementComRouters";
import { echartsComRouters } from "./echartsComRouters";
import { headerRouters } from "./headerRouter";
// import ElUpLoad from "@/elComponents/ElUpLoad/ElUpLoad.vue";
const ElementComRouters = [
    {
        path: '/ElementCom',
        name: 'ElemntUI组件',
        component: () => import('@/pages/HomePage.vue'),
        redirect: "/ElementCom/uploadCom",
        children: elementComRouters
    },
    // { path: "*", redirect: elementComRouters[0].path },
]
const EchartsComRouters = [
    {
        path: '/EchartsCom',
        name: 'Echarts组件',
        component: () => import('@/pages/HomePage.vue'),
        redirect: "/EchartsCom/echartsCom",
        children: echartsComRouters
    },
    // { path: "*", redirect: echartsComRouters[0].path },
]


export {
    ElementComRouters,
    EchartsComRouters
}

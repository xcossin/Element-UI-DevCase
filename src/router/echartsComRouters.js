
// Elemet-UI组件
export const echartsComRouters = [
    // 上传组件
    {
        path: 'echartsCom',
        name: 'echartsCom',
        title: 'echartsCom 组件封装',
        meta: { routerName: "Echarts" },
        component: () => import('@/components/EchartsCom/Echarts/Echarts.vue')
    },
]

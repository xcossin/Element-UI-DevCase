
// Elemet-UI组件
export const elementComRouters = [
    // 上传组件
    {
        path: 'uploadCom',
        name: 'uploadCom',
        title: 'Upload 上传',
        meta: { routerName: "Upload 上传" },
        component: () => import('@/components/ElementCom/ElUpLoad/ElUpLoad.vue')
    },
]

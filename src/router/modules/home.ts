export default [
    {
        path: "/home",
        name: "home",
        component: () => import("@views/home/index.vue"),
        meta: {
            title: '首页'
        }
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@views/test/index.vue"),
        meta: {
            title: '测试页面'
        }
    },
    {
        path: "/chat",
        name: "chat",
        component: () => import("@views/chat/index.vue"),
        meta: {
            title: '聊天页面'
        }
    }
]
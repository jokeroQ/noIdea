import { createRouter,createWebHistory,RouteRecordRaw} from "vue-router"
// import homeRoutes from "./modules/home";

//路由类型 ：RouteRecordRaw
const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        component:()=>import("../components/login/login.vue")
    },
    {
        path:"/register",
        component:()=>import("../components/login/register.vue")
    },
    // ...homeRoutes
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
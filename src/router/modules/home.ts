export default [
    {
        path:"/home",
        name:"home",
        component:()=>import("@views/home/index.vue"),
        meta:{
            title:'首页'
        }
    },
    {
        path:"/test",
        name:"test",
        component:()=>import("@views/test/index.vue"),
        meta:{
            title:'测试页面'
        }
    }
]
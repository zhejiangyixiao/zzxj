import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        // 设置重定向 跳转主页面
        path: "/",
        redirect: "/index"
    },
    {
        // 刚开始的主页面  包含tabbar
        path: "/index",
        component: () =>
            import ("../views/Index"),
        children: [{
                // 设置重定向 刚进入home的时候跳转首页
                path: "",
                redirect: "/home"
            },
            {
                // 设置 首页 路径
                path: "/home",
                component: () =>
                    import ("../views/Home")
            },
            {
                // 设置 分类 路径
                path: "/classify",
                component: () =>
                    import ("../views/Classify")
            },
            {
                // 设置 购物车 路径
                path: "/cart",
                component: () =>
                    import ("../views/Cart"),
                // 设置需不需要权限 true 表示需要权限
                meta: { requiresAuth: true }
            },
            {
                // 设置 我的 路径
                path: "/mine",
                component: () =>
                    import ("../views/Mine")
            },
            {
                path: '/findings',
                component: () =>
                    import ('../views/Findings.vue')
            }
        ]
    },
    {
        // 收货地址点击进去的路由页面
        path: '/address',
        component: () =>
            import ('../compoents/Mine/AddressAdd.vue')
    },
    {
        // 设置登录路径
        path: "/login",
        component: () =>
            import ('../views/Login'),
    },

    {
        //设置商品详情页
        path:'/detail',
        component:() =>
            import('../views/Detailpage.vue')
    },

    {
        path: "/test",
        component: () =>
            import ('../views/test'),
    },
    {
        // 未设置的路径 跳转404 页面
        path: "/*",
        component: () =>
            import ("../views/NotFound")
    }
];

const router = new VueRouter({
    routes
});
// 无权限跳转到登录页面
router.beforeEach((to, from, next) => {
    // 导航守卫与路由元信息配合，设置页面有无登录下 能够跳转的页面
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem("token");
        if (token) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
})

export default router;
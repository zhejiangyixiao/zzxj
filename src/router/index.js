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
            },
            {
                // 设置 美术馆全无系列 路径
                path: "/classifydetail",
                component: () =>
                    import ("../views/classifyDetail")
            },
            {
                // 设置 登入注册 路径
                path: "/Login",
                component: () =>
                    import ("../views/Login")
            },
            {
                // 设置 登入注册 路径
                path: "/fenleiDetail",
                component: () =>
                    import ("../views/fenleiDetail")
            }
        ]
    },

    {
        // 添加收货地址
        path: "/addressAdd",
        component: () =>
            import ('../views/AddressAdd.vue'),
    },
    {
        // 修改收货地址
        path: '/address',
        component: () =>
            import ('../views/Address.vue'),
    },
    {
        // mine-设置
        path: '/mineset',
        component: () =>
            import ('../views/MineSet.vue'),
    },
    {
        // mine-优惠券
        path: '/discount',
        component: () =>
            import ('../views/MineDiscount.vue'),
    },
    // 我的->头像信息
    {
        path: '/mineData',
        component: () =>
            import ('../views/mineData.vue'),
    },
    // 我的 ->收藏
    {
        path: '/mineCollect',
        component: () =>
            import ('../views/mineCollect.vue'),
    },
    // {
    //     // 收货地址点击进去的路由页面
    //     path: '/address',
    //     component: () =>
    //         import ('../compoents/Mine/Address.vue'),
    // },
    {
        // 设置登录路径
        path: "/login",
        component: () =>
            import ('../views/Login'),
    },
    {
        //设置商品详情页
        path: '/detail',
        component: () =>
            import ('../views/Detailpage.vue')
    },
    {
        // 未库付款页面
        path: '/nonpayment',
        component: () =>
            import ('../views/Nonpayment.vue')
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
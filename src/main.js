import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入reset 去除自带的样式，变成怪异盒模型
import "./assets/style/reset.stylus"
// 新的rem适配
import "amfe-flexible";
Vue.config.productionTip = false;


import {
    Tabbar,
    TabbarItem,
    NavBar,
    Icon,
    Swipe, 
    SwipeItem,
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
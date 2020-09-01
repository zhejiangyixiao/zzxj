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
    Swipe,
    SwipeItem,
    Card,
    NavBar
} from "vant";

//监听手机滑动事件，引入的模块
import VueTouch from 'vue-touch';
Vue.use(VueTouch, { name: 'v-touch' })

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Card);
Vue.use(NavBar);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
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
    Sidebar,
    SidebarItem,
    Grid, 
    GridItem,
    Image as VanImage,
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
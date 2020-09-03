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
    Tab,
    Tabs,
    Swipe,
    SwipeItem,
    Image as VanImage,
    Lazyload,
    Icon,
    Grid,
    GridItem,
    Cell,
    CellGroup,
    Sidebar,
    SidebarItem,
    Col,
    Row,
    GoodsAction, 
    GoodsActionIcon, 
    GoodsActionButton,
    Dialog,
    Card,
    Button,
    Empty,
} from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Button);
Vue.use(Empty);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
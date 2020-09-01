import Vue from "vue";
import Vuex from "vuex";
import { actions } from './actions';
import { mutations } from './mutations';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 灵感页数据列表
        inspiration_list: [],
    },
    mutations,
    actions,
    modules: {}
});
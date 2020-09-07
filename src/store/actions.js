import {
    getInspirationList,
    getClassfiyList
} from '../until/api';

export const actions = {
    // 请求灵感页
    async getinspirationData({ commit }) {
        const res = await getInspirationList();
        commit("getinspirationData", {
            list: res.result
        });
    },
    // 请求分类页
    async getClassfiyData({ commit }, payload) {
        console.log(1122);
        const res = await getClassfiyList(payload);
        console.log(res);
        commit("getClassfiyData", {
            list: res.list,
        })
    }
}
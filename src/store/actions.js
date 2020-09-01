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
        const res = await getClassfiyList(payload);
        console.log(payload, res);
        commit("getClassfiyData", {
            list: res.list,
        })
    }
}
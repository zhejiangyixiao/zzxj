import {
    getInspirationList
} from '../until/api';

export const actions = {
    // 请求灵感页
    async getinspirationData({ commit }) {
        const res = await getInspirationList();
        commit("getinspirationData", {
            list: res.result
        });
    },
}
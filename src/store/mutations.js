export const mutations = {
    // 灵感页
    getinspirationData(state, payload) {
        state.inspiration_list = payload.list;
    },
    // 分类
    getClassfiyData(state, payload) {
        state.classfiy_list = payload.list;
    }
}
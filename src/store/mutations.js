export const mutations = {
    // 灵感页
    getinspirationData(state, payload) {
        state.inspiration_list = payload.list;
    },
}
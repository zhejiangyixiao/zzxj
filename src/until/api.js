import http from './http';
// 获取发现页 灵感数据
export function getInspirationList() {
    return http.get("/inspiration");
}

//获取分类数据
export function getClassfiyList(params) {
    return http.post("/classfiy", params);
}
import http from './http';

export function getInspirationList() {
    return http.get("/inspiration");
}


export function getClassfiyList(params) {
    return http.post("/classfiy", params);
}
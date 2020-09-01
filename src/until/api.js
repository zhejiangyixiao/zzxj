import http from './http';

export function getInspirationList() {
    return http.get("/inspiration");
}
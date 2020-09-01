import axios from 'axios';
import qs from 'qs';
// 创建自定义实例对象
const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/af8d601316dbeeb72255ee92bbadab25/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});
// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
const http = {
    get(url, parmas) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                    params: parmas,
                })
                .then(function(res) {
                    if (res.status === "0") {
                        resolve(res);
                    } else {
                        this.$toast.fail(res.msg);
                    }
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    },
    post(url, parmas) {
        return new Promise((resolve, reject) => {
            instance.post(url, qs.stringify(parmas))
                .then(function(res) {
                    resolve(res);
                })
                .catch(function(err) {
                    reject(err)
                });
        })
    }
}

export default http;
import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const service = axios.create({
    baseURL : '/api',
    timeout : 2000
})

service.interceptors.request.use((config) => {
    NProgress.start();
    return config;
})

service.interceptors.response.use(
    response => {
        NProgress.done();
        return response.data;
    },
    error => {
        NProgress.done();
        return Promise.reject(error.message)
    })

    export default service;
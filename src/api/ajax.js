import axios from "axios";
import Nprogress from "nprogress";
import 'nprogress/nprogress.css';

const service = axios.create({
     baseURL: '/api',
     timeout : 2000
});

service.interceptors.request.use((config) => {
    //显示进步条
    Nprogress.start();
    return config;
})

service.interceptors.response.use(
    response => {
        Nprogress.done();
        return response.data;
    },
    error => {

        return new Promise.reject(error)
    }
    
)

export default service;


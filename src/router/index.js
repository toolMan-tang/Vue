import Vue from "vue";
import VueRouter from 'vue-router';

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : '/search/:keyWord?',
            component : Search,
            name : 'search',
            props :  (route) => ({
                keyWord : route.params.keyWord,
                content : route.query.content
            })
        
        },
        {
            path : '/login',
            component : Login,
            meta: { 
                isHideFooter: true
             }
        },
        {
            path : '/register',
            component : Register
        },
    ]
})
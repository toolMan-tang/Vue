import Vue from "vue";
import VueRouter from 'vue-router';
<<<<<<< HEAD
import routes from "./routes";
=======

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
<<<<<<< HEAD
    routes
=======
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
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b
})
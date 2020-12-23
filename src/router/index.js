import Vue from "vue";
import VueRouter from 'vue-router';

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

Vue.use(VueRouter);
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location, onComplete, onAbort) {
// 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
if (onComplete===undefined && onAbort===undefined) {
    return originPush.call(this, location, onComplete, onAbort).catch(() => {})
  } else { // 如果有指定任意回调函数, 通过call调用源push函数处理
    originPush.call(this, location, onComplete, onAbort)
  }
}

// replace同理处理
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onComplete===undefined && onAbort===undefined) {
      return originReplace.call(this, location, onComplete, onAbort).catch(() => {})
    } else {
      originReplace.call(this, location, onComplete, onAbort)
    }
  }


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
            component : Register,
            meta: { 
                isHideFooter: true
            }
        },
    ]
})
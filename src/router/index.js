import Vue from "vue";
import VueRouter from 'vue-router';

import routes from './routes';
import store from '@/store'

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

 
 
const router = new VueRouter({
    mode : 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})

router.beforeEach(async (to, from, next) => {
  //定义token
  let token = store.state.user.token
  if(token){
    if(to.path === '/login'){
      console.log(23);
      next('/');
    }else{
      let userInfo = !!store.state.user.userInfo.name;
      if(userInfo){
        //如果有token 则请求个人信息
        next();
      }else{
        //因为 没了token 所以清除
        try{
          await store.dispatch('getUserInfo');
          next();
        } catch(error) {
          store.dispatch('resetUserInfo')
          next('/login?redirect='+to.path);
          //去到之前想去但是没有去成的地方,需要和登录逻辑去配合使用
          // next('/login?redirect='+to.path)
        }
       
      }
    }
  }else{
    // if(to.path.name.startWith('pay') || to.path.name.instandOf)
    if( to.path.indexOf('/trade') === 0 || to.path.startsWith('/pay') || to.path.startsWith('/center')){
      next('/login?redirect='+to.path)
    }else{
      next()
    }
 
  }
})

export default router
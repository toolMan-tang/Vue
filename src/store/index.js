/* 
vuex最核心的管理对象store  ==> 仓库
*/
import Vue from 'vue'
import Vuex from 'vuex'

import home from './moudles/home'
import user from './moudles/user'

Vue.use(Vuex)

// 向外暴露store对象
export default new Vuex.Store({
  modules: {
    home,
    user
  }
})

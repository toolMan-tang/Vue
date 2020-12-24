import Vue from 'vue';
<<<<<<< HEAD
import App from './App.vue';
import router from '@/router';
import store from './store';
import TypeNav from '@/components/TypeNav';

//定义注册组件
Vue.component(TypeNav.name,TypeNav);
=======
import App from '@/App';
import router from '@/router';
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b

Vue.config.productionTip = false

new Vue({
  el : '#app',
  render: h => h(App),
<<<<<<< HEAD
  router,
  store
=======
  router
>>>>>>> c17645af1fae8298b83f7c2c9222a5e689fd716b
})

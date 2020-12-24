import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from './store';
import TypeNav from '@/components/TypeNav';

//定义注册组件
Vue.component(TypeNav.name,TypeNav);

Vue.config.productionTip = false

new Vue({
  el : '#app',
  render: h => h(App),
  router,
  store
})

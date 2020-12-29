import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from "@/store"
import Nav from "@/components/Nav";

import './plugins/swiper' // 加载swiper的配置
import './mock/mockServer'


Vue.component(Nav.name,Nav);


Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  el : '#app',
  render: h => h(App),
  router,
  store
})

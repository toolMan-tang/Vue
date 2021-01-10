import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from "@/store";
import Nav from "@/components/Nav";
import Pagination from "@/components/Pagination";
import * as Api from "@/api";

import './plugins/swiper' // 加载swiper的配置
import './plugins/element' //加载element-ui 
import './plugins/validate' //加载element-ui 
import './mock/mockServer';


Vue.component(Nav.name,Nav);
Vue.component(Pagination.name,Pagination);


Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = Api
  },
  el : '#app',
  render: h => h(App),
  router,
  store
})

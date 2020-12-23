import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from "@/store"
import Nav from "@/components/Nav";


Vue.component(Nav.name,Nav);


Vue.config.productionTip = false

new Vue({
  el : '#app',
  render: h => h(App),
  router,
  store
})

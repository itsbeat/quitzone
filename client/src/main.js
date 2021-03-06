import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './services/api'

import "./components"; 
import "./assets/css/app.css"; 

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

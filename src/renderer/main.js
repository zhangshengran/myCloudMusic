import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
let delay = 500
Vue.delay = delay;
Vue.timer = null;
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
// console.log(store)
// store.dispatch('setChooseSong','123')
// store.commit('setChooseSong',123)
// console.log(store.state.chooseSong)
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

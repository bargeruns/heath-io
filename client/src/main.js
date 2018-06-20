import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import { SocketIOPlugin } from './plugins/socket-io.plugin';

Vue.use(SocketIOPlugin);
Vue.use(Vuex);
import store from './store/store.index';
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

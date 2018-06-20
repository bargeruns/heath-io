import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { markets } from './markets';
import { orderbook } from './orderbook';

const store = new Vuex.Store({
  state: {
  },
  modules: {
    markets,
    orderbook
  }
});

export default store;
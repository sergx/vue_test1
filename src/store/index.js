import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import all from './store-all';

export default new Vuex.Store({
  modules:{
    all: all
  }
});

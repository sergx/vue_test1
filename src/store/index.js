import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import storeAll from './store-all';

export default new Vuex.Store({
  message: "hello big W!", // Будет вызываться через this.$store.state.message
  // То, что в модуле будет вызываться либо через геттер, либо через this.$store.state.MODULENAME.message
  modules:{
    common: storeAll
  }
});

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import theme from './theme';
import common from './common';
import dashboard from './dashboard';
import realtime from './realtime';
import settings from './settings';

export default new Vuex.Store({
  modules: {
    theme,
    common,
    dashboard,
    realtime,
    settings,
  },
});

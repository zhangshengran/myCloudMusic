import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'
// import state from './state'
// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  // state,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})

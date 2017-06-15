import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import users from './users'
import classes from './classes'
import units from './units'
import errors from './errors'
// import questions from './questions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    users,
    classes,
    units,
    errors
  }
})

export default store

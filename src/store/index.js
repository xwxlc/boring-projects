import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  actions: {
    set_userInfo: ({ commit }, info) => {
      commit('SET_USERINFO', info)
    },
  },
  mutations: {
    SET_USERINFO: (state, info) => {
      state.userInfo = info
    },
  },
  modules: {
    userInfo: (state) => state.userInfo,
  },
})

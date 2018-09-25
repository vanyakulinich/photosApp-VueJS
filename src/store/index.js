import Vue from 'vue';
import Vuex from 'vuex';
import apiRequest from '../api/request';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    type: null,
    data: null
  },
  mutations: {
    pictures(state, data) {
      state.data = data
    }
  },
  actions: {
    async api({commit}, params) {
      const data = await apiRequest(params)
      commit('pictures', data)
    }
  }
})
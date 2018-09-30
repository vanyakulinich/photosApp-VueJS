import Vue from 'vue';
import Vuex from 'vuex';
import apiRequest from '../api/request';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filters: {
      photo: false,
      illustration: false,
      vector: false,
    },
    data: null
  },
  mutations: {
    pictures(state, {data, filters}) {
      state.data = data
      state.filters = filters ? filters : state.filters
    }
  },
  actions: {
    async api({commit}, {params, filters}) {
      const data = await apiRequest(params)
      commit('pictures', {data, filters})
    }
  }
})
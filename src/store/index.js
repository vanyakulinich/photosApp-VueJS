import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    type: 'no type',
    movies: 'no movies'
  },
  mutations: {
    addString(state) {
      state.movies+=' mutation added'
    },
    defaultString(state) {
      state.movies = 'no movies'
    }
  },
  actions: {
    sampleAction({commit}) {
      commit('addString')
    },
    backToDefault({commit}) {
      commit('defaultString')
    }
  }
})
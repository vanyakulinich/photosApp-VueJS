import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    type: 'no type',
    movies: 'no movies',
    test: 'initial state'
  },
  mutations: {
    addString(state) {
      state.test='mutation added'
    },
    defaultString(state) {
      state.test = 'default state'
    },
    input(state, e) {
      state.test = e.target.value
    }
  },
  actions: {
    sampleAction({commit}) {
      commit('addString')
    },
    backToDefault({commit}) {
      commit('defaultString')
    },
    dynamicInput({commit}, e) {
      commit('input', e)
    }
  }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum Theme {
  'dark',
  'light'
}

export default new Vuex.Store({
  state: {
    color: ''
  },
  mutations: {
    setTheme (state, theme: boolean) {
      state.color = theme ? '#192a56' : '#00a8ff'
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getColor: state => {
      return state.color
    }
  }
})

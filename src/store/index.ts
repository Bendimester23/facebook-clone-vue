import router from '@/router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum Theme {
  'dark',
  'light'
}

export default new Vuex.Store({
  state: {
    color: '#192a56',
    textColor: '#f5f6fa',
    isLoggedIn: false
  },
  mutations: {
    setTheme (state, theme: boolean) {
      state.color = theme ? '#192a56' : '#00a8ff'
      state.textColor = theme ? '#f5f6fa' : '#2f3640'
      Vue.$cookies.set('theme', theme ? 'dark' : 'light')
    },
    setLoggedIn (state, loggedIn: boolean) {
      state.isLoggedIn = loggedIn
      if (loggedIn) {
        window.location.assign(router.resolve({ path: '/home' }).href)
      } else {
        window.location.assign(router.resolve({ path: '/auth/login' }).href)
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getColor: state => {
      return state.color
    },
    isLogged: state => {
      return state.isLoggedIn
    }
  }
})

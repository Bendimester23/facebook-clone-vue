import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import cookies from '@/plugins/cookies'

Vue.config.productionTip = false

cookies.version.bold()

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')

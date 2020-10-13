import VueCookies from 'vue-cookies-ts'
import Vue from 'vue'

export default Vue.use(VueCookies)

Vue.cookies.config({ expires: '7d' })

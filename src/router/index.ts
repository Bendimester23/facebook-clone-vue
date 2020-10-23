import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetails from '@/views/PostDetails.vue'
import Auth from '@/views/Auth.vue'
import Landing from '@/views/Landing.vue'
import NewPost from '@/views/NewPost.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/post/:id',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '/auth/:type',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/home/post',
    name: 'NewPost',
    component: NewPost
  }
]

const router = new VueRouter({
  routes
})

export default router

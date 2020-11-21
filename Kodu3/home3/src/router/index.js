import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../components/index.vue')
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../components/browse.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

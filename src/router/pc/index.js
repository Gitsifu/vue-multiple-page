import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views_pc/Home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/pc',
  routes
})

export default router

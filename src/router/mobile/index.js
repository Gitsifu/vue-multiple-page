import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../../views_mobile/Home')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/mobile',
    routes
})

export default router

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/certificado/:id',
    name: 'certificado',
    component: () => import('@/views/certificados.vue')
  },
  {
    path: '/prueba/:id',
    name: 'prueba',
    component: () => import('@/components/cer.vue')
  },
  {
    path: '/extra',
    name: 'extra',
    component: () => import('@/views/extra.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
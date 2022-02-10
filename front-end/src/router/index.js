import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue') // set home as path '/'
  },
  {
    path: '/register',
    meta: {guess: true},
    name: 'register',
    component: () => import('../views/register.vue') // set register as path '/register'
  },
  {
    path: '/login',
    meta: {guess: true},
    name: 'login',
    component: () => import('../views/login.vue')// set login as path '/login'
  },
  {
    path: '/profile',
    meta: {guess: true},
    name: 'profile',
    component: () => import('../views/profile.vue')// set login as path '/login'
  },
  {
    path: '/editProfile',
    meta: {guess: true},
    name: 'editProfile',
    component: () => import('../views/editProfile.vue')// set login as path '/login'
  },

  {
    path: '/createpost',
    meta: {guess: true},
    name: 'createpost',
    component: () => import('../views/createpost.vue')// set login as path '/login'
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

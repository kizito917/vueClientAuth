import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

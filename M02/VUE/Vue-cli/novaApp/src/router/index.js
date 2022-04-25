import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import miVistaView from '../views/miVistaView.vue'
import chistesCheese from '../views/chistesCheese.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/miVista',
    name: 'miVista',
    component: miVistaView,
  },
  {
    path: '/chistesQueso',
    name: 'chistesQueso',
    component: chistesCheese,
  }
]

const router = new VueRouter({
  routes
})

export default router

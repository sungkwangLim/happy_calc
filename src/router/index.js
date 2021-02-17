import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import Area from '../views/Area.vue'
import Gsap from '../views/Gsap.vue'

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
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/area',
    name: 'Area',
    component: Area
  },
  {
    path: '/gsap',
    name: 'Gsap',
    component: Gsap
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


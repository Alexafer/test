import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '../views/Tasks.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/Activity',
    name: 'Activity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Activity.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

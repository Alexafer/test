import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Tasks from '../views/Tasks.vue'

const routes: Array<RouteRecordRaw> = [
  // жесткая загрузка
  // {
  //   path: '/',
  //   name: 'Tasks',
  //   component: Tasks
  // },
  // ajax загрузка 
  {
    path: '/',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/Activity',
    name: 'Activity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Activity.vue')
  },
  {
    path: '/Kanban',
    name: 'Kanban',
    component: () => import('../views/Kanban.vue')
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/Files',
    name: 'Files',
    component: () => import('../views/Files.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/errors/Page404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

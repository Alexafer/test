import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
  }
  from 'vue-router'
import Tasks from '../views/Tasks.vue'

const routes: Array<RouteRecordRaw> = [
  // жесткая загрузка
  // {
  //   path: '/',
  //   name: 'Tasks',
  //   component: Tasks
  // },
  // ajax загрузка
  {
    name: 'Tasks',
    path: '/',
    component: Tasks
  },
  {
    name: 'Activity',
    path: '/Activity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Activity.vue')
  },
  {
    name: 'Kanban',
    path: '/Kanban',
    component: () => import('../views/Kanban.vue')
  },
  {
    name: 'Calendar',
    path: '/Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    name: 'Files',
    path: '/Files',
    component: () => import('../views/Files.vue')
  },
  {
    name: 'PageNotFound',
    path: '/:NotFound(.*)*',  //'/:pathMatch(.*)*'
    component: () => import('../views/errors/Page404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from) => {
//   console.log(to);
//   console.log(from);
//   if (to.path === '/Kanban1') {
//     router.push('456465465')
//   }
// })

export default router

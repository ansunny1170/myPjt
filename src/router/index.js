import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/QnA',
        component: () => import('../views/QnA'),
        children: [
          {
            path: '/QnA/create',
            // component: () => import('../views/QnA/create.vue')
            component: () => import('../views/Home.vue')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue'),
    meta: { sidebar: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
/*
import Index from '@/pages/Index/template.vue'
import Login from '@/pages/Login/template.vue'
import Detail from '@/pages/Detail/template.vue'
import Edit from '@/pages/Edit/template.vue'
import Create from '@/pages/Create/template.vue'
import Register from '@/pages/Register/template.vue'
import User from '@/pages/User/template.vue'
import My from '@/pages/My/template.vue'
*/

import store from '../store'
window.store = store

Vue.use(Router)

/*
const router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/detail/:blogId',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      component: Create,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/my',
      component: My,
      meta: { requiresAuth: true }
    }
  ]
})
*/

const router =  new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index/template.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/login/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/pages/detail/template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/pages/edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      component: () => import('@/pages/create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: () => import('@/pages/user/template.vue')
    },
    {
      path: '/my',
      component: () => import('@/pages/my/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      component: () => import('@/pages/register/template.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router


import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/template.vue'
import index from '@/pages/index/template.vue'
import detail from '@/pages/detail/template.vue'
import create from '@/pages/create/template.vue'
import edit from '@/pages/edit/template.vue'
import my from '@/pages/my/template.vue'
import register from '@/pages/register/template.vue'
import user from '@/pages/user/template.vue'

import store from '../store'
window.store = store

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/detail/:blogId',
      component: detail
    },
    {
      path: '/create',
      component: create,
      meta:{requiresAuth:true}
    },
    {
      path: '/edit/:blogId',
      component: edit,
      meta:{requiresAuth:true}
    },
    {
      path: '/my',
      component: my,
      meta:{requiresAuth:true}
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/user/:userId',
      component: user
    }
  ]
})
router.beforeEach((to, from, next) => {//router就是上面创建的一个新对象,beforeEach每一次路由切换，都会执行函数
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checklogin').then(isLogin=>{
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
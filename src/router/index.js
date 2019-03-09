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

Vue.use(Router)

export default new Router({
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
      path: '/detail',
      component: detail
    },
    {
      path: '/create',
      component: create
    },
    {
      path: '/edit',
      component: edit
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/user',
      component: user
    }
  ]
})

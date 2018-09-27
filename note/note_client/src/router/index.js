import Vue from 'vue'
import Router from 'vue-router'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const components = {
  index: () => import('@/views/index'),
  register: () => import('@/views/register')
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:components.index,
    },
    {
      path:'/register',
      name:'register',
      component:components.register
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from, next) => {
  Nprogress.done()
})

export default router;

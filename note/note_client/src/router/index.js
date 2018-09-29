import Vue from 'vue'
import Router from 'vue-router'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const components = {
  index: () => import('@/views/index'),
  register: () => import('@/views/register'),
  writeNote: () => import('@/views/writeNote'),
  article: () => import('@/views/article'),
  search: () => import('@/views/search')
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:components.index,
      meta:{
        title:'云笔记'
      }
    },
    {
      path:'/register',
      name:'register',
      component:components.register,
      meta:{
        title:'注册'
      }
    },
    {
      path:'/writeNote',
      name:'writeNote',
      component:components.writeNote,
      meta:{
        title:'写笔记'
      }
    },
    {
      path:'/article/:id',
      name:'article',
      component:components.article,
      meta:{
        title:'文章详情'
      }
    },
    {
      path:'/search',
      name:'search',
      component:components.search,
      meta:{
        title:'搜索'
      }
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

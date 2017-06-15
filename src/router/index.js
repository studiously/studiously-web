import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/views/Settings'
import LatestActivity from '@/views/LatestActivity'

import Class from '@/views/Class'
import JoinClass from '@/views/JoinClass'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/latest'
    },
    {
      path: '/latest',
      name: 'latest',
      component: LatestActivity
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/classes/new',
      name: 'join',
      component: JoinClass
    },
    {
      path: '/classes/:id',
      name: 'class',
      component: Class,
      props: true
    }
  ],
  scrollBehavior,
  mode: 'history'
})

export default router

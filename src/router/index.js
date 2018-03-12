import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/Notes'
import New from '@/components/New'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/notes'
  }, {
    path: '/notes',
    name: 'Notes',
    meta: {
      title: '记事本'
    },
    component: Notes
  }, {
    path: '/new',
    meta: {
      title: '新建'
    },
    component: New
  }]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router

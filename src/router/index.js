import Vue from 'vue'
import Router from 'vue-router'

import Notes from '@/components/Notes'
import New from '@/components/New'
import NotesAll from '@/components/NotesAll'
import NotesFinish from '@/components/NotesFinish'
import NotesUnfinish from '@/components/NotesUnfinish'

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
    component: Notes,
    redirect: '/notes/all',
    children: [{
      path: 'all',
      name: 'NotesAll',
      meta: {
        title: '记事本 - 全部'
      },
      component: NotesAll,
      props: true
    }, {
      path: 'finish',
      name: 'NotesFinish',
      meta: {
        title: '记事本 - 已完成',
      },
      component: NotesFinish,
      props: true
    }, {
      path: 'unfinish',
      name: 'NotesUnfinish',
      meta: {
        title: '记事本 - 未完成'
      },
      component: NotesUnfinish,
      props: true
    }]
  }, {
    path: '/new',
    name: 'New',
    meta: {
      title: '新建'
    },
    component: New
  }]
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  next();
})

export default router

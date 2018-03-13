import Vue from 'vue'
import Router from 'vue-router'

const Notes = () => import(/* webpackChunkName: "notes" */ '@/components/Notes')
const NotesAll = () => import(/* webpackChunkName: "notes" */ '@/components/NotesAll')
const NotesFinish = () => import('@/components/NotesFinish')
const NotesUnfinish = () => import('@/components/NotesUnfinish')
const CreateNote = () => import('@/components/Create')
const Collect = () => import('@/components/Collect')

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
    path: '/creat/note',
    name: 'CreateNote',
    meta: {
      title: '新建'
    },
    component: CreateNote
  }, {
    path: '/collect',
    name: 'Collect',
    meta: {
      title: '收藏'
    },
    component: Collect
  }]
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title
  next();
})

export default router

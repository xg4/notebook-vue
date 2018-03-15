import Vue from 'vue'
import Router from 'vue-router'

const Notes = () => import('@/components/Notes')
const NotesAll = () => import('@/components/NotesAll')
const NotesFinish = () => import('@/components/NotesFinish')
const NotesUnfinish = () => import('@/components/NotesUnfinish')
const CreateNote = () => import('@/components/Create')
const NotesCollect = () => import('@/components/NotesCollect')
const Note = () => import('@/components/Note')
const User = () => import('@/components/User')

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
      component: NotesAll
    }, {
      path: 'finish',
      name: 'NotesFinish',
      meta: {
        title: '记事本 - 已完成',
      },
      component: NotesFinish
    }, {
      path: 'unfinish',
      name: 'NotesUnfinish',
      meta: {
        title: '记事本 - 未完成'
      },
      component: NotesUnfinish
    }]
  }, {
    path: '/creat/note',
    name: 'CreateNote',
    meta: {
      title: '新建'
    },
    component: CreateNote
  }, {
    path: '/collection',
    name: 'NotesCollect',
    meta: {
      title: '收藏'
    },
    component: NotesCollect
  }, {
    path: '/note/:id',
    name: 'Note',
    meta: {
      title: '详情'
    },
    component: Note
  }, {
    path: '/me',
    name: 'User',
    meta: {
      title: '我'
    },
    component: User
  }]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router

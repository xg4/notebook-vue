import Vue from 'vue'
import Router from 'vue-router'

const Notes = () =>
  import ( /* webpackChunkName: "notes" */ '@/components/Notes')
const NotesAll = () =>
  import ( /* webpackChunkName: "notes" */ '@/components/NotesAll')
const NotesFinish = () =>
  import ( /* webpackChunkName: "notes" */ '@/components/NotesFinish')
const NotesUnfinish = () =>
  import ( /* webpackChunkName: "notes" */ '@/components/NotesUnfinish')
const CreateNote = () =>
  import ('@/components/Create')
const NotesCollect = () =>
  import ('@/components/NotesCollect')
const Note = () =>
  import ('@/components/Note')
const Profile = () =>
  import ('@/components/Profile')
const NoteEdit = () =>
  import ('@/components/Edit')
const SetTag = () =>
  import ('@/components/SetTag')

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/notes'
  }, {
    path: '/notes',
    redirect: '/notes/all',
    component: Notes,
    children: [{
      path: 'all',
      name: 'NotesAll',
      meta: {
        title: '记事本',
        sheetName: 'notes_sheet',
        keepAlive: 'XgNotes',
        showNavbar: true
      },
      component: NotesAll
    }, {
      path: 'finish',
      name: 'NotesFinish',
      meta: {
        title: '记事本 - 已完成',
        sheetName: 'notes_sheet',
        showNavbar: true
      },
      component: NotesFinish
    }, {
      path: 'unfinish',
      name: 'NotesUnfinish',
      meta: {
        title: '记事本 - 未完成',
        sheetName: 'notes_sheet',
        showNavbar: true
      },
      component: NotesUnfinish
    }]
  }, {
    path: '/create/note',
    name: 'CreateNote',
    meta: {
      title: '新建',
      showNavbar: true
    },
    component: CreateNote
  }, {
    path: '/collection',
    name: 'Collection',
    meta: {
      title: '收藏',
      keepAlive: 'XgCollection',
      showNavbar: true
    },
    component: NotesCollect
  }, {
    path: '/note/:id',
    name: 'XgNote',
    meta: {
      title: '详情',
      sheetName: 'note_sheet',
      showBack: true
    },
    component: Note
  }, {
    path: '/profile',
    name: 'Profile',
    meta: {
      title: '我',
      keepAlive: 'XgProfile',
      showNavbar: true
    },
    component: Profile
  }, {
    path: '/profile/tag',
    name: 'SetTag',
    meta: {
      title: '设置标签',
      showBack: true
    },
    component: SetTag
  }, {
    path: '/note/:id/edit',
    name: 'EditeNote',
    meta: {
      title: '编辑',
      showBack: true
    },
    component: NoteEdit
  }]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router

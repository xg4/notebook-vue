import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/Book'
import New from '@/components/New'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/book'
  }, {
    path: '/book',
    name: 'Book',
    meta: {
      title: '记事本'
    },
    component: Book
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

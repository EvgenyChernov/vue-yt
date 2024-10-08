import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import ForgetPage from '@/views/ForgetPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import MailPage from '@/views/MailPage.vue'
import MailItemPage from '@/views/MailItemPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: LoginPage, alias: '/', name: 'login' },
    {
      path: '/forget',
      component: ForgetPage,
      meta: {
        cantEnter: false
      }
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      beforeEnter () {
      // тут собирается аналитика
      }
    },
    {
      path: '/mail',
      component: MailPage,
      children: [
        { path: ':mailId', component: MailItemPage, props: true }
      ]
    },
    // { path: '/:notFound(.*)', redirect: '/login' }
    { path: '/:notFound(.*)', component: NotFoundPage }
  ],
  linkActiveClass: 'btn-active',
  linkExactActiveClass: 'btn-active'
})

router.beforeEach((to, from, next) => {
  // место для авторизации
  if (to.meta.cantEnter) {
    next({ name: 'login' })
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  // тут собирается аналитика
})

export default router

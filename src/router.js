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
    { path: '/login', component: LoginPage, alias: '/' },
    {
      path: '/forget',
      component: ForgetPage,
      meta: {
        cantEnter: false
      }
    },
    { path: '/dashboard', component: DashboardPage },
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
  if (to.meta.cantEnter) {
    next('/login')
  } else {
    next()
  }
})
export default router

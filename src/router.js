import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import ForgetPage from '@/views/ForgetPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import MailPage from '@/views/MailPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: LoginPage, alias: '/' },
    { path: '/forget', component: ForgetPage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/mail', component: MailPage }
  ]
})

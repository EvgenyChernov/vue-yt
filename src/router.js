import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: LoginPage
    }
  ]
})

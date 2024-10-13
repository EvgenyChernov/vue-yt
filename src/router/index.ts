import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import {useAuthStore} from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/HelpView.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/request/:id',
    name: 'request',
    component: () => import('@/views/RequestView.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'btn-active',
  linkExactActiveClass: 'btn-active',
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requireAuth = to.meta.auth
  if (requireAuth && authStore.isAuthenticated()) {
    next()
  } else if (requireAuth && !authStore.isAuthenticated()) {
    next('/auth?message=auth')
  } else {
    next()
  }

})

export default router

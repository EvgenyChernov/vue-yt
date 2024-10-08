<template>
  <div class="container mx-auto space-y-2">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <div class="menu menu-horizontal space-x-3">
            <button @click="$router.go(-1)" class="btn btn-sm" to="">
              <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
              </svg>
            </button>
          <router-link to="/login" v-slot="{ navigate } ">
            <button @click="navigate" class="btn btn-sm">
              <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                   viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              </svg>
            </button>
          </router-link>
        </div>
        <ul class="menu menu-horizontal px-1">
          <li>
            <router-link to="/forget">forget</router-link>
          </li>
          <li>
            <router-link to="/login">login</router-link>
          </li>
          <li>
            <router-link to="/dashboard">dashboard</router-link>
          </li>
          <li>
            <router-link to="/mail" custom v-slot="{ navigate, href }">
              <a @click="navigate" href="#"
              :class="{
                'btn-active': $route.path.indexOf(href) !== -1
              }">Mail</a>
            </router-link>
          </li>
          <li v-show="isAuth" >
            <button @click="logout">Выйти</button>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <a href="/forget"></a>
    <div class="bg-white rounded-xl p-5">
      <h2>{{ $i18n('app.title') }}</h2>
      <button @click="$alert('Наш алерт2')" class="btn">Алерт</button>
    </div>
    <button @click="changeLang" class="btn">{{ $i18n('app.changeBtn') }}</button>
    <button @click="modal = !modal" class="btn">open modal</button>
    <teleport to="body">
      <app-modal v-if="modal" @close="modal = !modal"></app-modal>
    </teleport>
  </div>
</template>

<script>
import { inject, ref } from 'vue' // Импортируем ref
import AppModal from '@/components/AppModal.vue'

export default {
  components: { AppModal },
  data () {
    return {
      isAuth: false
    }
  },
  methods: {
    login () {
      this.isAuth = true
      this.$router.push('/dashboard')
    },
    logout () {
      this.isAuth = false
      this.$router.push('/login')
    },
    goToBack () {
      // переход по именованному роутеру
      // this.$router.push('login')
      // переход назад
      this.$router.go(-1)
    }
  },
  provide () {
    return {
      login: this.login,
      logout: this.logout
    }
  },
  setup () {
    const modal = ref(false)

    const changeI18N = inject('changeI18N') // Извлекаем функцию смены языка

    // Определяем метод changeLang
    const changeLang = () => {
      changeI18N('en') // Вызываем функцию смены языка
    }

    return { modal, changeLang } // Возвращаем modal и метод для использования в шаблоне
  }
}
</script>

<style lang="scss" scoped>
</style>

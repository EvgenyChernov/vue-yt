import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import translatePlugin from '@/translatePlugin'

const app = createApp(App)

const ru = {
  app: {
    title: 'как работают плагины во vue',
    changeBtn: 'изменить язык'
  }
}

const en = {
  app: {
    title: 'How plugins work in vue',
    changeBtn: 'change language'
  }
}

app.use(translatePlugin, { ru, en })
app.use(router)
app.mount('#app')

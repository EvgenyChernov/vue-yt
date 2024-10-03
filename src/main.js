import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

const app = createApp(App)
app.component('async-component', defineAsyncComponent(() => {
  return import('@/AppAsyncComponent.vue')
}))

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
// import alertMixin from '@/alertMixin'

const app = createApp(App)

// app.directive('focus', {
//   mounted (el) {
//     el.focus()
//   }
// })
// app.mixin(alertMixin)
app.mount('#app')

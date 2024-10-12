import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const pinia = createPinia(); // Инициализация Pinia
const app = createApp(App);

app.use(pinia); // Подключение Pinia
app.use(router); // Подключение роутера

app.mount('#app'); // Монтирование приложения

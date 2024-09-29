const { createApp } = Vue

createApp({
    data() {
        return {
            count : 3,
            title: 'Счетчик'
        }
    }
}).mount('#app')
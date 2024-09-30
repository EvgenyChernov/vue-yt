Vue.createApp({
    data: () => ({
        myHtml: '<h1>vue 3 app </h1>',
        title: 'Vue Youtube',
        user: {
            name: 'evgen',
            email: 'evgen@gmail.com',
            password: 'evgen@gmail.com',
            age: '23'
        },
        items: [1, 2, 3, 4, 5, 6],
    }),
    computed: {
        evenItems() {
            return this.items.filter(i => i %2 === 0);
        }
    }
}).mount('#app')
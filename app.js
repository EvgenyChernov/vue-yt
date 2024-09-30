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
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event.key)
        },
        remove(index){
            this.items.splice(index, 1)
        },
        log(event){
            console.log(event)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0);
        },
    }
}).mount('#app')
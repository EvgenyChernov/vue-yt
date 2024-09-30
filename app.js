const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'это title'
        }
    },
    // template: `
    // <div>
    //        <h1>Вывод из темплейта</h1>
    //        <h1>{{ title }}</h1>
    //        <button @click="title = 'новый title'" class="btn">изменить</button>
    // </div>
    // `,
    methods: {
        changeTitle() {
            this.title = 'новый тайтл'
        }
    },
    render() {
        return h('div', {
                class: 'card center'
            },
            h('ul', null, [
                h('li', null,  this.title ),
                h('li', null, 'это Li2')
            ]),
            h('button', {
                class: 'btn error',
                onclick: this.changeTitle
            }, 'Изменить')
        )
    }
})


app.mount('#app')
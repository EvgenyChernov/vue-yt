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
            console.log(this)
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
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created () {
        console.log('created')
    },
    beforeMount (){
        console.log('beforeMount')
    },
    mounted () {
        console.log('mounted')
    },
    beforeUnmount (){
        console.log('beforeUnmount')
    },
    unmounted () {
        console.log('unmount')
    },
    beforeUpdate () {
        console.log('beforeUpdate')
    },
    updated () {
        console.log('updated')
    }
})


app.mount('#app')

// setTimeout(() => {
//     app.unmount()
// }, 2000)



let title = 'Vue 3'
let message = 'Заголовок это ' + title
// console.log(message)
// title = 'Angular 10'
// console.log(message)
const data = {
     title : 'Vue 3',
     message : 'Заголовок это '
}

const proxy = new Proxy(data, {
    // get(target, key) {
    //     console.log(target)
    //     console.log(key)
    // },
    set(target, key, value) {
        if (key === 'title') {
            target.message = 'Заголовок это ' +  value
        }
        target[key] = value

        // console.log(target)
        // console.log(key)
        // console.log(value)
    }
})
proxy.title = 'Angular 10'
// console.log(proxy)
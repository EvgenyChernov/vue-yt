const {createApp} = Vue

createApp({
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: ''

        }
    },
    methods: {
        inputChangeHandler(event) {
            console.log('inputChangeHandler', event.target.value)
            this.inputValue = event.target.value
        }
    }
}).mount('#app')
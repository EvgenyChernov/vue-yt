const {createApp} = Vue

createApp({
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']

        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index, event) {
            this.notes.splice(index, 1)
        },
    },
    computed: {
        doubleCountComp() {
            return this.notes.length * 2
        }
    },
    watch: {
        // валидация импровезированная
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}).mount('#app')
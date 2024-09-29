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
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        deleteNote(index, event) {
            console.log(event)
            this.notes.splice(index, 1)
        }

    }
}).mount('#app')
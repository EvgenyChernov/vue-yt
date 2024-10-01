const {createApp} = Vue

createApp({
    data() {
        return {
            complete : false,
            activeStep: 1,
            steps: [
                {
                    number: 1,
                    name: 'Основы',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto aut autem beatae consectetur cum cumque est facilis laborum minima, molestias, necessitatibus nihil quia tenetur?'
                },
                {
                    number: 2,
                    name: 'Компоненнты',
                    body: 'Описание второго шага. Продолжение Lorem ipsum dolor sit amet.'
                },
                {
                    number: 3,
                    name: 'Роутер',
                    body: 'Описание третьего шага. Продолжение Lorem ipsum dolor sit amet.'
                },
                {
                    number: 4,
                    name: 'Vuex',
                    body: 'Описание четвертого шага. Продолжение Lorem ipsum dolor sit amet.'
                },
                {
                    number: 5,
                    name: 'Composition',
                    body: 'Описание пятого шага. Продолжение Lorem ipsum dolor sit amet.'
                }
            ]
        }
    },
    methods: {
        doStep(nextStep) {
            this.activeStep = nextStep
        },
        doNextStep() {
            if (this.activeStep < 5) {
                this.activeStep = this.activeStep + 1
            }
        },
        doPrevStep() {
            if (this.activeStep > 1) {
                this.activeStep = this.activeStep - 1
            }
        }
    }
}).mount('#app')

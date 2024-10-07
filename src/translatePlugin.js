import { reactive, toRefs } from 'vue'

export default {
  install (app, options) {
    const state = reactive({
      current: 'ru'
    })

    const changeLanguage = (name) => {
      state.current = name
    }

    app.config.globalProperties.$alert = (text) => {
      window.alert(text)
    }

    app.config.globalProperties.$i18n = (key) => {
      return key.split('.').reduce((words, k) => {
        return words[k] || '=== UNKNOWN ==='
      }, options[state.current])
    }

    app.provide('changeI18N', changeLanguage)
    app.provide('currentLang', toRefs(state)) // Предоставляем текущий язык
  }
}

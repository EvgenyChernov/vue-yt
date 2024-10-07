<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <h2>{{ $i18n('app.title') }}</h2>
      <button @click="$alert('Наш алерт2')" class="btn">Алерт</button>
    </div>
    <button @click="changeLang" class="btn">{{$i18n('app.changeBtn')}}</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup () {
    const changeI18N = inject('changeI18N') // Извлекаем функцию смены языка

    // Определяем метод changeLang
    const changeLang = () => {
      changeI18N('en') // Вызываем функцию смены языка
    }

    return { changeLang } // Возвращаем метод для использования в шаблоне
  },
  mounted () {
    this.$alert('Наш алерт') // Это может оставаться без изменений, если вы хотите использовать alert
  }
}
</script>

<style lang="scss" scoped>
</style>

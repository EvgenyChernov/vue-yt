<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <h2>{{ $i18n('app.title') }}</h2>
      <button @click="$alert('Наш алерт2')" class="btn">Алерт</button>
    </div>
    <button @click="changeLang" class="btn">{{$i18n('app.changeBtn')}}</button>
    <button @click="modal = !modal" class="btn">open modal</button>
    <teleport to="body">
      <app-modal v-if="modal" @close="modal = !modal"></app-modal>
    </teleport>
  </div>
</template>

<script>
import { inject, ref } from 'vue' // Импортируем ref
import AppModal from '@/components/AppModal.vue'

export default {
  components: { AppModal },
  setup () {
    const modal = ref(false)

    const changeI18N = inject('changeI18N') // Извлекаем функцию смены языка

    // Определяем метод changeLang
    const changeLang = () => {
      changeI18N('en') // Вызываем функцию смены языка
    }

    return { modal, changeLang } // Возвращаем modal и метод для использования в шаблоне
  }
}
</script>

<style lang="scss" scoped>
</style>

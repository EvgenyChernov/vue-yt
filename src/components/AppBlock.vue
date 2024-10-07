<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <button @click="toggleAlert" class="btn btn-secondary">
        Показать сообщение
      </button>
      <app-alert
          v-show="alert"
          @close="toggleAlert"
          :text="'содержимое Алерта'"
          type="alert-error"
      ></app-alert>
    </div>
  </div>
</template>

<script>

import AppAlert from '@/components/AppAlert.vue'
import AlertMixin from '@/alertMixin'

export default {
  mixins: [AlertMixin],
  components: { AppAlert }
}
</script>

<style lang="scss" scoped>
</style>

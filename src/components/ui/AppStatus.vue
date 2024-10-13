<template>
  <span :class="['badge', classesMap[status]]">{{textMap[status]}}</span>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
const className = 'badge-neutral'
const classesMap = {
  active: 'badge-primary',
  cancelled: 'badge-error',
  done: 'badge-success',
  pending: 'badge-warning'
}
  const textMap = {
    active: 'Активен',
    cancelled: 'Отменен',
    done: 'Завершен',
    pending: 'Выполняется'
  }
 const props = defineProps({
    status: String,
  })

</script>

<style scoped>

</style>
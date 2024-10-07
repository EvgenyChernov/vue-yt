<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <h2>Директивы</h2>
      <div class="flex flex-col">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus type="text" id="inp">
      </div>
    </div>
  </div>
</template>

<script>

import focusDirective from '@/focusDirective'

export default {
  directives: {
    focus: focusDirective
  }
}
</script>

<style lang="scss" scoped>
</style>

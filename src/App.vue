<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <h2 v-color:[type]="myColor">Директивы</h2>
      <div v-color:[type].blink="myColor" class="flex flex-col">
        <label for="inp">Активный по умолчанию</label>
        <input v-focus  type="text" id="inp">
      </div>
      <button @click="myColor = 'green'" class="btn">сделать </button>
      <button @click="type = type === 'color'? 'backgroundColor' : 'color'" class="btn">поменять цвет </button> {{type}}
    </div>
  </div>
</template>

<script>

import focusDirective from '@/focusDirective'
import colorDirective from '@/colorDirective'

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective
  },
  data () {
    return {
      myColor: 'red',
      type: 'color'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

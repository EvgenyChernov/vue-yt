<template>
  <div class="container pt-1">
    <h1>Slots</h1>
    <app-list>
      <template #default="{inx, iter}">
        <span  style="color: #6ddb09;"> <strong>{{inx}}</strong> item: {{iter}}</span>
      </template>
    </app-list>
    <app-block>
      <template #footer>
        <p>Это самый важный текст для этого приложения</p>
      </template>
      <template v-slot:header>
        <h3>Это заголовок H3</h3>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from '@/AppBlock.vue'
import AppList from '@/AppList.vue'
import colors from 'tailwindcss/colors'

export default {
  methods: {
    colors () {
      return colors
    }
  },
  components: { AppBlock, AppList }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="container pt-1">
    <h1>Slots</h1>
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
export default {
  components: { AppBlock }
}
</script>

<style lang="scss" scoped>
</style>

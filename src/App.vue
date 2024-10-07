<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <h2>Как работают плагины</h2>
      <button @click="$alert('Наш алерт2')" class="btn">Алерт</button>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    this.$alert('Наш алерт')
  }
}
</script>

<style lang="scss" scoped>
</style>

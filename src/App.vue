<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="bg-white rounded-xl p-5">
      <h2>{{ $i18n('app.title')}}</h2>
      <button @click="$alert('Наш алерт2')" class="btn">Алерт</button>
    </div>
    <button @click="changeLang" class="btn">{{$i18n('app.changeBtn')}}</button>
  </div>
</template>

<script>

export default {
  inject: ['changeI18N'],
  mounted () {
    this.$alert('Наш алерт')
  },
  methods: {
    changeLang () {
      this.changeI18N('en')
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

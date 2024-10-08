<template>
  <div v-if="mail">
    Текст письма с id {{mail.id}}
    {{mail.text}}
    <button @click="$router.push('/mail')">Закрыть</button>
  </div>
</template>

<script>
export default {
  inject: ['mails'],
  props: ['mailId'],
  computed: {
    mail () {
      if (this.mailId) {
        return this.mails.find(e => e.id === Number(this.mailId))
      }
      return null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

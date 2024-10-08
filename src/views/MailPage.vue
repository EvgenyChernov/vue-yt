<template>
  <div class="bg-white rounded-xl p-5 space-y-4">
    MAIL
    <div v-for="mail in mails" :key="mail.id" class="bg-gray-200 rounded-md shadow-sm">
      <router-link :to="'/mail/' + mail.id">{{ mail.text }}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mails: [
        { text: 'lorem1', id: 1 },
        { text: 'lorem2', id: 2 },
        { text: 'lorem3', id: 3 },
        { text: 'lorem4', id: 4 },
        { text: 'lorem5', id: 5 },
        { text: 'lorem6', id: 6 }

      ]
    }
  },
  provide () {
    return {
      mails: this.mails
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

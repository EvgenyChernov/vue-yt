<template>
  <div class="bg-white rounded-xl p-5">
    ДАшбоард
    <router-link :to="{name: 'email'}">к письмам</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteLeave (to, from, next) {
    const answer = confirm('вы уверены, что хотите перейти?')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <hr>
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="item in news" :key="item"> {{ item.title }} <span v-show="item.wasRead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, eligendi!</span></li>
  </ul>
</template>

<script>
export default {
  inject: [
    'title',
    'news'
  ]
}
</script>

<style lang="scss" scoped>

</style>

<script>
import AppNews from '@/AppNews.vue'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        'Какая то новость',
        'Какая то новость2'
      ]
    }
  },
  components: {
    AppNews
  }
}
</script>

<template>
  <div class="container pt-1">
    <div class="card ">
      <h2>Актуальные новости на {{ now }}</h2>
      <app-news></app-news>
      <app-news
          v-for="item in news"
          :key="item"
          :title="item"
      ></app-news>
    </div>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

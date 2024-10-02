<script>
import AppNews from '@/AppNews.vue'

export default {
  data () {
    return {
      openRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Какая то новость',
          id: 1,
          isOpen: false
        }, {
          title: 'Какая то новость2',
          id: 2,
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleOpen (id) {
      this.news = this.news.map(item => {
        if (item.id === id) {
          item.isOpen = !item.isOpen
        }
        return item
      })
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
      <p>открыли {{openRate}}</p>
      <app-news
          v-for="item in news"
          :key="item.id"
          :title="item.title"
          :id="item.id"
          :is-open="item.isOpen"
          @toggle="toggleOpen(item.id)"
          @openRate="openRate = openRate+1"
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

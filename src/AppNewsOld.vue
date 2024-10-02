<template>
  <div class="container pt-1">
    <div class="card ">
      <h2>Актуальные новости на {{ now }}</h2>
      <p>открыли {{ openRate }} | прочитано {{ readRate }}</p>
      <app-news
          v-for="item in news"
          :key="item.id"
          :title="item.title"
          :id="item.id"
          :was-read="item.wasRead"
          :is-open="item.isOpen"
          @toggle="toggleOpen(item.id)"
          @open-rate="openRate = openRate + 1"
          @read-news="readNews(item.id)"
          @not-read-news="notReadNews(item.id)"
      ></app-news>
    </div>
  </div>

</template>

<script>
import AppNews from '@/AppNews.vue'

export default {
  data () {
    return {
      readRate: 0,
      openRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Какая то новость',
          id: 1,
          isOpen: false,
          wasRead: false
        }, {
          title: 'Какая то новость2',
          id: 2,
          isOpen: false,
          wasRead: false
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
    },
    readNews (id) {
      this.news = this.news.map(item => {
        if (item.id === id) {
          item.wasRead = true
          this.readRate++
        }
        return item
      })
    },
    notReadNews (id) {
      this.news = this.news.map(item => {
        if (item.id === id) {
          item.wasRead = false
          this.readRate--
        }
        return item
      })
    }
  },
  provide () {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  },
  components: {
    AppNews
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

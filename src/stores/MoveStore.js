import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMoveStore = defineStore('moveStore', () => {
  const movies = ref([])
  const activeTab = ref(2)

  const watchedMovies = computed(() => {
    return movies.value.filter((elem) => elem.isWatched === true)
  })
  const totalCount = computed(() => {
    return movies.value.length
  })

  const setActiveTab = (id) => {
    activeTab.value = id
  }

  const toggleWatched = (id) => {
    const inx = movies.value.findIndex((elem) => elem.id === id)
    movies.value[inx].isWatched = !movies.value[inx].isWatched
  }

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id)
  }

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCount,
    setActiveTab,
    toggleWatched,
    deleteMovie
  }
})

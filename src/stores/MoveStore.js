import { defineStore } from 'pinia'

export const useMoveStore = defineStore('moveStore', {
  state: () => ({
    movies: [
    ],
    activeTab: 2
  }),
  getters: {
    watchedMovies () {
      return this.movies.filter((el) => el.isWatched === true)
    },
    totalCount () {
      return this.movies.length
    }
  },
  actions: {
    setActiveTab (id) {
      this.activeTab = id
    },
    toggleWatched (id) {
      const inx = this.movies.findIndex((el) => el.id === id)
      this.movies[inx].isWatched = !this.movies[inx].isWatched
    },
    deleteMovie (id) {
      this.movies = this.movies.filter((el) => el.id !== id)
    }
  }
})

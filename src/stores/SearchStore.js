import { defineStore } from 'pinia'
import { useMoveStore } from '@/stores/MoveStore'
// import { useMoveStore } from '@/stores/MoveStore'

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    movies: [],
    loading: false
  }),
  actions: {
    async getMovies (search) {
      this.loading = true
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTJjNmI3MWIyNDlkN2Q3OTE2M2YxNTdiNTY0NDZmYiIsIm5iZiI6MTcyODQzMjQ5MC41MDQ3MjcsInN1YiI6IjY3MDVjNmIwMzczYjFiZTBlMGU5ZDY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ao0fA_KdU1xXsQkuFowy2-dIfnEpqJ-vgpeYk1WU-lY'
        }
      }
      fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
          this.movies = response.results
          this.loading = false
        })
        .catch(err => console.error(err))
    },
    addToUserMovies (object) {
      const movieStore = useMoveStore()
      movieStore.movies.push({ ...object, isWatched: false })
      movieStore.activeTab = 1
    }
  }

})

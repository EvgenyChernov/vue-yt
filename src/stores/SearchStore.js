import { defineStore } from 'pinia'
import { useMoveStore } from '@/stores/MoveStore'
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false)
  const movies = ref([])

  const getMovies = async (search) => {
    loader.value = true
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
        movies.value = response.results
        loader.value = false
      })
      .catch(err => console.error(err))
  }

  const addToUserMovies = (object) => {
    const movieStore = useMoveStore()
    movieStore.movies.push({ ...object, isWatched: false })
    movieStore.activeTab = 1
  }
  return {
    loader,
    movies,
    addToUserMovies,
    getMovies
  }
})

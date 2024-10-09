<template>
  <div class="">
    <div class="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
            :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${move.poster_path}`"
            :alt="move.original_title"/>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ move.original_title }} ({{ move.release_date }})</h2>
        <p>{{ move.overview }}</p>
        <div v-if="!isSearch" class="card-actions justify-end">
          <button class="btn btn-primary" @click="moveStore.toggleWatched(move.id)">
            <span v-if="!move.isWatched" >Просмотрено</span>
            <span v-else>Убрать из просмотренного</span>
          </button>
          <button class="btn btn-error" @click="moveStore.deleteMovie(move.id)">Удалить</button>
        </div>
        <div v-if="isSearch" class="card-actions justify-end">
          <button @click="searchStore.addToUserMovies(move)" class="btn btn-error">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMoveStore } from '@/stores/MoveStore'
import { useSearchStore } from '@/stores/SearchStore'

const moveStore = useMoveStore()
const searchStore = useSearchStore()
// eslint-disable-next-line no-unused-vars,no-undef
const props = defineProps({
  move: {
    type: Object,
    required: true,
    default: () => {
    }
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss" scoped>

</style>

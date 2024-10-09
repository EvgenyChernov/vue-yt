<template>
  <div class="bg-gray-200 rounded-lg">
    <form @submit.prevent="searchStore.getMovies(searchMovie)" class="w-auto p-5 flex justify-center items-center w-full">
      <div class="flex space-x-2">
        <label class="input input-bordered flex items-center gap-2 w-48">
          <input v-model="searchMovie" type="text" class="grow" placeholder="Search"/>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
            <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"/>
          </svg>
        </label>
        <button type="submit" class="btn btn-success">Success</button>
      </div>
    </form>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
<!--      <div class="" v-for="move in searchStore.movies" :key="move.id">{{move}}</div>-->
      <move-component v-for="move in searchStore.movies" :move="move" :key="move.id" :is-search="true"></move-component>
      <app-loader v-if="searchStore.loader" ></app-loader>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '@/stores/SearchStore'
import MoveComponent from '@/components/MoveComponent.vue'
import AppLoader from '@/components/AppLoader.vue'

const searchStore = useSearchStore()
const searchMovie = ref('')
</script>

<style lang="scss" scoped>

</style>

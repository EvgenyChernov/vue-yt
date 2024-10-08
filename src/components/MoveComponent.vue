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
        <div class="card-actions justify-end">
          <button class="btn btn-primary">
            <span v-if="!move.isWatched">Просмотрено</span>
            <span v-else>Убрать из просмотренного</span>
          </button>
          <button class="btn btn-error">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  move: {
    type: Object,
    required: true,
    default: () => {
    }
  }
})
</script>

<style lang="scss" scoped>

</style>

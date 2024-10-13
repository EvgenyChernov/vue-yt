<template>
  <div role="alert" :class="['container mx-auto alert absolute transition-all duration-250 ease-in-out z-50', store.message ? 'top-4' : 'top-[-4rem]']">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info h-6 w-6 shrink-0">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>{{store.message}}</span>
  </div>
</template>

<script setup lang="ts">
  import {useStore} from "@/store";

  const store = useStore()

</script>

<style scoped>

</style>
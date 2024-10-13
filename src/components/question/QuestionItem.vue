<template>
  <div class="p-5">
    <details :class="['transition collapse bg-base-200', {'collapse-open': isOpen}]">
      <summary class="collapse-title text-xl font-medium">{{ question.title }}</summary>
      <div class="collapse-content">
        <p>{{ question.text }}</p>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

const isOpen = false
const props = defineProps({
  question: {
    true: Object,
    required: true
  }
})
</script>

<style scoped>

</style>
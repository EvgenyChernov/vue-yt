<template>
  <div>
    <div class="flex justify-between">
    <h3>{{ title }}</h3>
    <slot name="header"/>
    </div>
    <div class="">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: ""
  }
})


document.title = `${props.title} | клон банка`

</script>

<style scoped>

</style>
<template>
  <div>
    <div class="breadcrumbs text-sm" v-if="back">
      <ul>
        <li>
          <router-link :to="{ name:'home' }">Главная</router-link>
        </li>
      </ul>
    </div>
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
  },
  back: {
    type: Boolean,
    default: false
  }
})


document.title = `${props.title} | клон банка`

</script>

<style scoped>

</style>
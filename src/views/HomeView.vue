<template>
  <div>
    Домашняя страница
    {{ text }}
    <button @click="navigate" class="btn">перейти</button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
const text = 'Some text'
const navigate = () => router.push({name: 'users'})


</script>

<style scoped>

</style>
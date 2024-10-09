<template>
  <div>
    Страница пользователей
    <div v-for="user in userStore.users" :key="user.name" class="">
      {{user.name}}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/store";
const userStore = useUserStore();

</script>

<style scoped>

</style>
<template>
  <div>
    Страница пользователей
    <p style="color: red" v-if="error">{{error}}</p>
    <Suspense v-else>
      <template #default>
        <this-user-list></this-user-list>
      </template>
      <template #fallback>
        <p>Загрузка</p>
      </template>
    </Suspense>
    <button @click="userStore.getUsers" class="btn btn-success">Загрузить пользователей</button>
  </div>
</template>

<script setup lang="ts">
import ThisUserList from "@/components/ThisUserList.vue";
import {useUserStore} from "@/store";
import {onErrorCaptured, ref} from "vue";

const error = ref<null | unknown>(null)
 onErrorCaptured(e => {
   error.value = e;
   return true
 })


const userStore = useUserStore()
</script>

<style scoped>

</style>
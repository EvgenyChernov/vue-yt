<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>website</th>
      </tr>
      </thead>
      <tbody>
      <!-- row 1 -->
      <tr v-for="user in users" :key="user.id">
        <th>{{user.id}}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.website }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/store";
import {useUsers} from "@/use/users";

const userStore = useUserStore();

const {users} =  await useUsers()

</script>

<style scoped>

</style>
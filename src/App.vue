<template>
  <div class="container mx-auto">
    <AppMessage/>
    <component :is="layoutComponent">
      <router-view/>
    </component>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import AppMessage from "@/components/ui/AppMessage.vue";

// Получаем текущий роут
const route = useRoute();

// Вычисляем, какой layout использовать
const layoutComponent = computed(() => {
  switch (route.meta.layout) {
    case 'main':
      return MainLayout;
    case 'auth':
      return AuthLayout;
    default:
      // По умолчанию возвращаем MainLayout или другой layout
      return MainLayout;
  }
});
</script>


<style scoped>

</style>
<template>
  <div class="flex space-x-5 justify-center items-center">
    <label class="input input-bordered flex items-center gap-2">
      <input type="text" class="grow" placeholder="Search" v-model="name"/>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70">
        <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"/>
      </svg>
    </label>
    <select class="select select-bordered w-full max-w-xs" v-model="status">
      <option value="">Выберите статус</option>
      <option value="done">Завершен</option>
      <option value="cancelled">Отменен</option>
      <option value="active">Активен</option>
      <option value="pending">Выполняется</option>

    </select>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref, watch} from 'vue';

const name = ref('')
const status = ref('')
const emits = defineEmits(['update:modelValue']);


const props = defineProps({
  modelValue: Object
});

watch([name, status], ([newName, newStatus]) => {
  emits('update:modelValue', { name: newName, status: newStatus });
});

</script>

<style scoped>

</style>
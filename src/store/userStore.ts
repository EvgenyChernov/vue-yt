import { Ref, ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', () => {
  const users: Ref<any[]> = ref([
    { name: 'jek' },
    { name: 'angel' }
  ]);

  return { users };
});
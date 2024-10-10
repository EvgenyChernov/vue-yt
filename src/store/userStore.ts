import { Ref, ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', () => {
  const users: Ref<any[]> = ref([]);
const getUsers = async () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => {
        users.value = json
        console.log(json)
      });
}
  return { users, getUsers };
});
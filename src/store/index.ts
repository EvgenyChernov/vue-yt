import {defineStore} from "pinia";
import {useUserStore} from "@/store/userStore";
import {useAuthStore} from "@/store/authStore";
import {ref, Ref} from "vue";

export {
  useUserStore,
  useAuthStore
};

export const useStore = defineStore('store', () => {
  const message: Ref<any> = ref(null)

  const setMessage = (mes: String) => {
    message.value = mes;
    setTimeout(() => {
      message.value = null;
    }, 5000)
  }

  return {
    message,
    setMessage
  }
});
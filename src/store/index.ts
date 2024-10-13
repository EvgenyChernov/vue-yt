import {defineStore} from "pinia";
import {useUserStore} from "@/store/userStore";
import {useAuthStore} from "@/store/authStore";
import {useRequestStore} from "@/store/requestStore";
import {ref, Ref} from "vue";

export {
  useUserStore,
  useAuthStore,
  useRequestStore
};

export const useStore = defineStore('store', () => {
  const message: Ref<any> = ref(null)
  const isShowModal = ref(false)
  const loading: Ref<any> = ref(false)
  const sidebar: Ref<any> = ref(false)

  const setMessage = (mes: String) => {
    message.value = mes;
    setTimeout(() => {
      message.value = null;
    }, 5000)
  }
  const showModal = () => {
    isShowModal.value = true
  }
  const closeModal = () => {
    isShowModal.value = false
  }


  return {
    message,
    isShowModal,
    setMessage,
    showModal,
    closeModal,
    loading,
    sidebar,
  }
});
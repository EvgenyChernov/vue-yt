import {defineStore} from "pinia";
import {Ref, ref} from "vue";

export const useAuthStore = defineStore('authStore', () => {
  const token: Ref<any> = ref(null);

  const login = async (email: string, password: string) => {
    console.log('вызов логин', email, password);
  }

  const logOut = () => {
    token.value = null
    localStorage.removeItem("jwt-token");
  }

  const setToken = (tok: string) => {
    token.value = tok
    localStorage.setItem("jwt-token", token.value)
  }
  const isAuthenticated = () => {
    return !!token
  }

  return {
    token,
    login,
    logOut,
    setToken,
    isAuthenticated
  }
})
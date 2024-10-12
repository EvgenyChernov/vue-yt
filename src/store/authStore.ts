import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import axios, {Axios} from "axios";
import {error} from "@/utils/error";

export const useAuthStore = defineStore('authStore', () => {
    const TOKEN_KEY = "jwt-token"
    const token: Ref<any> = ref(localStorage.getItem(TOKEN_KEY));

    const login = async (email: string, password: string) => {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        console.log(url)
        const {data} = await axios.post(url, {
          email,
          password,
          returnSecureToken: true
        })
        setToken(data.idToken)
      } catch (e) {
        if (e instanceof Error && 'response' in e) {
          console.log(error((e as any).response.data.error.message));
        }
      }

      // console.log('вызов логин', email, password, process.env.VUE_APP_FB_KEY);
    }

    const logOut = () => {
      token.value = null
      localStorage.removeItem(TOKEN_KEY);
    }

    const setToken = (tok: string) => {
      token.value = tok
      localStorage.setItem(TOKEN_KEY, token.value)
    }

    const isAuthenticated = () => {
      console.log('isAuthenticated')
      return !!token
    }

    return {
      token,
      login,
      logOut,
      setToken,
      isAuthenticated
    }
  }
)
import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import requestAxios from "@/axios/request";
import {useAuthStore} from "@/store/authStore";
import {useStore} from "@/store/index";
import Request from "@/axios/request";

export const useRequestStore = defineStore('requestStore', () => {
  const requests: Ref<any> = ref([])
  const authStore = useAuthStore();
  const store = useStore();
  const setRequests = (req: any[] | any) => {
    requests.value = req;
  }

  const create = async (sentData : Object | any) => {
    try {
      const token = authStore.token
      const {data} = await requestAxios.post(`/requests.json?auth=${token}`, sentData)
      console.log(requests.value, data)
      requests.value[data.name] = sentData
      store.setMessage('Заявка успешно создана')
    } catch (e: Object | any) {
      store.setMessage('Получена ошибка запроса' + String(e.message))
    }
  }

  const getRequests = async () => {
    try {
    const token = authStore.token
    const {data} = await requestAxios.get(`/requests.json?auth=${token}`)
      requests.value = data
    } catch (e: Object | any) {
      store.setMessage('Получена ошибка запроса' + String(e.message))
    }
  }

  return {
    requests,
    setRequests,
    create,
    getRequests
  }
})


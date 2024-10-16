import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import requestAxios from "@/axios/request";
import {useAuthStore} from "@/store/authStore";
import {useStore} from "@/store/index";
import Request from "@/axios/request";
import router from "@/router";

export const useRequestStore = defineStore('requestStore', () => {
  const requests: Ref<any> = ref([])
  const authStore = useAuthStore();
  const store = useStore();
  const filterFio: Ref<string | null> = ref(null); // Для хранения ФИО фильтра
  const filterStatus: Ref<string | null> = ref(null); // Для хранения статуса фильтра
  const setRequests = (req: any[] | any) => {
    requests.value = req;
  }

  const create = async (sentData: Object | any) => {
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
  const getRequestById = async (id: String) => {
    try {
      const token = authStore.token
      const {data} = await requestAxios.get(`/requests/${id}.json?auth=${token}`)
      return data
    } catch (e: Object | any) {
      store.setMessage('Получена ошибка запроса' + String(e.message))
    }
  }
  const removeRequest = async (id: String) => {
    try {
      const token = authStore.token
      const {data} = await requestAxios.delete(`/requests/${id}.json?auth=${token}`)
      store.setMessage('Заявка успешно удалена')

    } catch (e: Object | any) {
      store.setMessage('Получена ошибка запроса' + String(e.message))
    }
  }
  const updateRequest = async (request: Object | any) => {
    try {
      const token = authStore.token
      const {data} = await requestAxios.put(`/requests/${request.id}.json?auth=${token}`, request)
      store.setMessage('Заявка успешно обновлена')
    } catch (e: Object | any) {
      store.setMessage('Получена ошибка запроса' + String(e.message))
    }
  }

  const filterRequests = (filterFio: string, filterStatus: string) => {
    return Object.fromEntries(
      Object.entries(requests.value).filter(([key, value]: [string, any]) => {
        const matchesFio = filterFio ? value.fio.toLowerCase().includes(filterFio.toLowerCase()) : true; // Используем includes для частичного совпадения
        const matchesStatus = filterStatus ? value.status === filterStatus : true;
        return matchesFio && matchesStatus; // Возвращает true только если оба условия выполняются
      })
    );
  };

  return {
    requests,
    setRequests,
    create,
    getRequests,
    filterRequests,
    getRequestById,
    removeRequest,
    updateRequest,
  }
})


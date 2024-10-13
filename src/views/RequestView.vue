<template>
  <div>
    <AppLoader v-if="loading"></AppLoader>
    <app-page back title="Заявка" v-else-if="request">
      <p><strong>Имя владельца</strong>: {{ request.fio }}</p>
      <p><strong>Телефон</strong>: {{ request.phone }}</p>
      <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
      <p><strong>Статус</strong>:
        <app-status :status="request.status"/>
      </p>
      <select v-model="status" class="select select-bordered w-full">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
      <button class="btn btn-error" @click="remove">Удалить</button>
      <button v-if="status !== request.status" class="btn btn-primary" @click="update">Обновить</button>
    </app-page>
    <div v-else class="">
      Заявки не найдены
    </div>
  </div>
</template>

<script setup lang="ts">
import AppPage from "@/components/ui/AppPage.vue";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {useRequestStore} from "@/store";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";
import {currency} from "@/utils/currency";
import router from "@/router";

const requestStore = useRequestStore()
const route = useRoute()
const loading = ref(false)
const request = ref({})
const status = ref()

const remove =  async () => {
  await requestStore.removeRequest(String(route.params.id))
  router.push({name: 'home'})
}

const update = () => {
  const data = {... request.value, id: String(route.params.id)}
  data.status = status.value
  requestStore.updateRequest(data)
  request.value.status = status.value
}

onMounted(async () => {
  loading.value = true;
  request.value = await requestStore.getRequestById(String(route.params.id))
  loading.value = false;
  status.value = request.value?.status
})

</script>

<style scoped>

</style>
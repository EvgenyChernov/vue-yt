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

const requestStore = useRequestStore()
const route = useRoute()
const loading = ref(false)
const request = ref({})


onMounted(async () => {
  loading.value = true;
  request.value = await requestStore.getRequestById(String(route.params.id))
  loading.value = false;
})

</script>

<style scoped>

</style>
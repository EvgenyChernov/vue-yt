<template>
  <app-loader v-if="store.loading"/>
  <app-page title="Home">
    <template #header>
      <button @click="store.showModal()" class="btn">кнопка</button>
    </template>
    <request-table :requests="requestStore.requests"/>
    <teleport to="body">
      <app-modal title="Заголовок модального окна">
        <request-modal-body @created="store.closeModal()" />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script setup lang="ts">

import AppPage from "@/components/ui/AppPage.vue";
import RequestTable from "@/components/request/RequestTable.vue";
import AppModal from "@/components/ui/AppModal.vue";
import {useRequestStore, useStore} from "@/store";
import RequestModalBody from "@/components/request/RequestModalBody.vue";
import {onMounted} from "vue";
import AppLoader from "@/components/ui/AppLoader.vue";

const store = useStore();
const requestStore = useRequestStore()

onMounted(async ()=> {
  store.loading = true
  await requestStore.getRequests()
  store.loading = false
})

</script>

<style scoped>

</style>
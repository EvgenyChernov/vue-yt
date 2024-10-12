<template>
  <app-page title="Home">
    <template #header>
      <button @click="store.showModal()" class="btn">кнопка</button>
    </template>
    <request-table :requests="[]"/>
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
import {useStore} from "@/store";
import RequestModalBody from "@/components/request/RequestModalBody.vue";

const store = useStore();
</script>

<style scoped>

</style>
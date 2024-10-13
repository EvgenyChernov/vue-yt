<template>
  <div class="">
    <router-view/>
  </div>
</template>

<script setup lang="ts">

import AppMessage from "@/components/ui/AppMessage.vue";
import {useRoute} from "vue-router";
import {useStore} from "@/store";
import {error} from "@/utils/error";

const route = useRoute()

if (route.query.message) {
  useStore().setMessage(error(String(route.query.message)))
}

</script>

<style scoped>

</style>
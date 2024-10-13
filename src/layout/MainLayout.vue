<template>
  <the-sidebar></the-sidebar>
  <div class="container min-h-screen">
    <the-navbar></the-navbar>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import AppModal from "@/components/ui/AppModal.vue";
import TheSidebar from "@/components/TheSidebar.vue";
</script>

<style scoped>

</style>
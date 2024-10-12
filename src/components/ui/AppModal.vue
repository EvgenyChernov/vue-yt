<template>
  <dialog @click.stop="store.closeModal()" :class="['modal', {'modal-open': store.isShowModal}]">
    <div @click.stop class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">
        <slot></slot>
      </p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button @click="store.closeModal()" class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import {useStore} from "@/store";

const store = useStore()
const props = defineProps({
  title: {
    title: String,
    required: false,
  }
})


</script>

<style scoped>

</style>
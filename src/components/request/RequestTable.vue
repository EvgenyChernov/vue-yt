<template>
  <div class="">
    <h4 class="text-center font-bold text-xl" v-if="requests.length === 0">Заявок пока нет</h4>
    <div v-else class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox"/>
            </label>
          </th>
          <th>ФИО</th>
          <th>Статус</th>
          <th>Сумма</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr v-for="(item, index) in requests" :key="index">
          <th>
            <label>
              <input type="checkbox" class="checkbox"/>
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"/>
                </div>
              </div>
              <div>
                <div class="font-bold">{{item.fio}}</div>
                <div class="text-sm opacity-50">{{item.phone}}</div>
              </div>
            </div>
          </td>
          <td>
            <span class="badge badge-ghost badge-sm">{{item.status}}</span>
          </td>
          <td>{{item.amount}}</td>
          <th>
            <router-link :to="{name: 'request', params: {id: item.id, }}" class="btn btn-ghost btn-xs">details</router-link>
          </th>
        </tr>
        <!-- row 2 -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue"
import AppModal from "@/components/ui/AppModal.vue";

const props = defineProps({
  requests: {
    type: Array,
    required: false,
    default: () => []
  }
})

</script>

<style scoped>

</style>
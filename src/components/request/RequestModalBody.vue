<template>
  <form @submit.prevent="onSubmit" class="">
    <div class="space-y-3 max-w-xs m-auto">
      <div class="">
        <label :class="['transition-colors input input-bordered flex items-center gap-2', {'input-error' : fError}]">
          ФИО
          <input v-model="fio" @blur="fBlur" type="text" class="grow" placeholder="Daisy"/>
        </label>
        <div
            :class="['label transition-all duration-250 ease-in-out overflow-hidden py-0', { 'h-7 opacity-100': fError, 'h-0 opacity-0': !fError }]">
          <span class="label-text-alt text-error">{{ fError }}</span>
        </div>
      </div>
      <div class="">
        <label :class="['transition-colors input input-bordered flex items-center gap-2', {'input-error' : pError}]">
          Телефон
          <input v-model="phone" @blur="pBlur" type="text" class="grow" placeholder="daisy@site.com"/>
        </label>
        <div
            :class="['label transition-all duration-250 ease-in-out overflow-hidden py-0', { 'h-7 opacity-100': pError, 'h-0 opacity-0': !pError }]">
          <span class="label-text-alt text-error">{{ pError }}</span>
        </div>
      </div>
      <div class="">
        <label :class="['transition-colors input input-bordered flex items-center gap-2', {'input-error' : aError}]">
          Суммы
          <input v-model="amount" @blur="aBlur" type="text" class="grow" placeholder="daisy@site.com"/>
        </label>
        <div
            :class="['label transition-all duration-250 ease-in-out overflow-hidden py-0', { 'h-7 opacity-100': aError, 'h-0 opacity-0': !aError }]">
          <span class="label-text-alt text-error">{{ aError }}</span>
        </div>
      </div>
      <select v-model="status" class="select select-bordered w-full">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
      <button type="submit" class="btn btn-block btn-primary" :disabled="isSubmitting">Создать</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {useRequestForm} from "@/use/request-form";

const emit = defineEmits([
  'created',
])

const submit = async (values: Record<string, any>) => {
  console.log(values)
  emit("created")
}

const {
  status,
  isSubmitting,
  onSubmit,
  fio,
  phone,
  amount,
  fError,
  fBlur,
  pError,
  pBlur,
  aError,
  aBlur
} = useRequestForm(submit);

</script>

<style scoped>

</style>
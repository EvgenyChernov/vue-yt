<template>
  <div class="container min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center p-2 h-full">
      <h3 class="font-bold text-xl p-2">Войти в систему</h3>
      <form @submit.prevent="onSubmit" class="p-2 space-y-2 flex flex-col items-center">
        <div class="">
          <label :class="['transition-colors input input-bordered flex items-center gap-2', {'input-error' : eError}]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
              <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
              <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
            </svg>
            <input v-model="email" type="text" class="grow" placeholder="Email" @blur="eBlur"/>
          </label>
          <div
              :class="['label transition-all duration-250 ease-in-out overflow-hidden py-0', { 'h-7 opacity-100': eError, 'h-0 opacity-0': !eError }]">
            <span class="label-text-alt text-error">{{ eError }}</span>
          </div>
        </div>
        <div class="">
          <label :class="['transition-colors input input-bordered flex items-center gap-2', {'input-error' : pError}]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
              <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"/>
            </svg>
            <input v-model="password" type="password" autocomplete class="grow" @blur="pBlur"/>
          </label>
          <div
              :class="['label transition-all duration-250 ease-in-out overflow-hidden py-0', { 'h-7 opacity-100': pError, 'h-0 opacity-0': !pError }]">
            <span class="label-text-alt text-error">{{ pError }}</span>
          </div>
        </div>
        <div class="">
          <button class="btn w-60 btn-accent" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
          <div
              :class="['label transition-all duration-250 ease-in-out overflow-hidden py-0', { 'h-7 opacity-100': isTooManyAttempts, 'h-0 opacity-0': !isTooManyAttempts }]">
            <span class="label-text-alt text-error">Вы сделали слишком много попыток</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useLoginForm} from "@/use/login-form";

const { email,
  eError,
  eBlur,
  password,
  pError,
  pBlur,
  isSubmitting,
  isTooManyAttempts,
  onSubmit } = useLoginForm();

</script>

<style scoped>

</style>
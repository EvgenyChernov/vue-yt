<template>
  <div v-if="alert" role="alert" :class="['alert', 'alert-'+alert.type]">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>{{alert.title + " " + alert.text  }}</span> <button @click="$emit('close')" :class="['btn', 'btn-' + alert.type]">Закрыть</button>
  </div>
</template>

<script>
export default {
  props: ['alert'],
  emits: ['close']
}
</script>

<style lang="scss" scoped>

</style>

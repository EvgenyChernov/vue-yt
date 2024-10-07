<template>
  <div role="alert" :class="['alert', type]">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-current">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>{{ text }}</span>
    <button @click="closeModal" class="btn">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    text: String,
    type: {
      type: String,
      default: 'alert-info',
      validator (value) {
        return ['alert-success', 'alert-warning', 'alert-error'].includes(value)
      }
    },
    closable: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

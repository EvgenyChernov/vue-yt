<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
      validator (value) {
        return ['', 'btn-primary', 'btn-secondary', 'btn-accent', 'btn-warning'].includes(value)
      }
    }
  },
  emits: ['action']
}
</script>

<style lang="scss" scoped>

</style>

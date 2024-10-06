<template>
    <button type="submit" class="btn" @click="$emit('action')">
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
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    }
  },
  emits: ['action']
}
</script>

<style lang="scss" scoped>

</style>

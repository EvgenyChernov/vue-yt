<template>
  <div>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{{ label }}</span>
      </div>
      <input
          type="text"
          :id="id"
          :placeholder="placeholder"
          :class="['input input-bordered w-full max-w-xs', error ? 'input-error' : '']"
          :value="value"
          @input="change"
      />
      <div v-if="error" class="label">
        <span class="label-text">{{ error }}</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  emits: ['update:value'],
  props: {
    value: String,
    placeholder: String,
    label: String,
    error: {
      type: String
    }
  },
  data () {
    return {
      id: 'input-' + Math.random()
    }
  },
  methods: {
    change (event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

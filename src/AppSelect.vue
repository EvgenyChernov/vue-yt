<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <select v-model="selectedOption" @change="onSelectChange" class="select select-bordered">
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option.name }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      type: Object,
      default: null
    },
    label: {
      type: String,
      required: false
    }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      selectedOption: this.modelValue
    }
  },
  watch: {
    modelValue (newValue) {
      this.selectedOption = newValue
    }
  },
  methods: {
    onSelectChange () {
      this.$emit('update:modelValue', this.selectedOption)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

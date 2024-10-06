<template>
  <label class="form-control">
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <textarea v-model="textValue" @input="onTextValue" class="textarea  textarea-bordered h-24" :placeholder="placeholder"></textarea>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String
    }
  },
  emits: ['update:modelValue'],

  data () {
    return {
      textValue: this.modelValue
    }
  },
  watch: {
    modelValue (newValue) {
      this.textValue = newValue
    }
  },
  methods: {
    onTextValue () {
      this.$emit('update:modelValue', this.textValue)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<script>
export default {
  // props: [
  //   'title'
  // ],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator: (value) => {
        return value !== undefined && value !== null
      }
    }
  },
  data () {
    return {
      // isOpen: false
    }
  },
  methods: {
    open () {
      this.$emit('toggle')
      if (!this.isOpen) {
        this.$emit('open-rate')
      }
    }
  },
  // emits: [
  //   'toggle',
  //   'openRate'
  // ],
  emits: {
    toggle: null,
    'open-rate' (num) {
      if (num) {
        return true
      }
      console.warn('no data in open-rate emit')
      return false
    }
  }
}
</script>

<template>
  <div>
    <h3> {{ title }}</h3>
    <button @click="open()" class="btn btn-primary btn-sm">{{ isOpen ? 'закрыть' : 'открыть' }}</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi placeat quibusdam sint
      temporibus
      totam?</p>

  </div>
</template>

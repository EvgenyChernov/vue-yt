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
  emits: ['toggle']
}
</script>

<template>
  <div>
    <h3> {{ title }}</h3>
    <button @click="$emit('toggle')" class="btn btn-primary btn-sm">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi placeat quibusdam sint
      temporibus
      totam?</p>
  </div>
</template>

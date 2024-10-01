<script>
export default {
  props: [
    'title'
  ],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
  <div>
    <h3>{{ item }} + {{ title }}</h3>
    <button @click="isOpen = !isOpen" class="btn btn-primary btn-sm">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi placeat quibusdam sint
      temporibus
      totam?</p>
  </div>
</template>

<template>
  <div class="container mx-auto">
    <div class="bg-white rounded-3xl w-auto p-7">
      <form class="form-control space-y-5" @submit.prevent="createPerson">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">What is your name?</span>
          </div>
          <input
              v-model="name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
          />
        </label>
        <div class="">
          <button class="btn" :disabled="name.length === 0">Создать человека</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    createPerson () {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

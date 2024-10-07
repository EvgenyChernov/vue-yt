<template>
  <div>
    <dialog class="modal modal-open" @click="close">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button  @click="close" class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

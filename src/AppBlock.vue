<template>
  <div class="card">
    <h3>Lorem ipsum dolor.</h3>
    <slot name="header"></slot>
    <slot></slot>
    <slot v-if="$slots.footer" name="footer">нет текста</slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>

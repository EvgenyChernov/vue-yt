<template>
  <div>
    <ul>
      <li v-for="(item, i) in 5" :key="item">
        <slot :iter="item" :inx="i"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>

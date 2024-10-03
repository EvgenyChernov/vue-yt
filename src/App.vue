<template>
  <div class="container pt-1">
    <h1>Динамические и ассинхронные компоненты </h1>
    <app-button
        @action="active='one'"
        :color="oneColor"
    >ONE
    </app-button>
    <app-button
        @action="active='two'"
        :color="twoColor"
    >TWO
    </app-button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>

import AppButton from '@/AppButton.vue'
import AppTextOne from '@/AppTextOne.vue'
import AppTextTwo from '@/AppTextTwo.vue'

export default {
  methods: {},
  data () {
    return {
      active: 'one'
    }
  },
  components: { AppTextTwo, AppTextOne, AppButton },
  computed: {
    componentName () {
      // if (this.active === 'one') {
      //   return 'app-text-one'
      // } else {
      //   return 'app-text-two'
      // }
      return 'app-text-' + this.active
    },
    oneColor () {
      return this.active === 'one' ? 'btn-primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'btn-primary' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

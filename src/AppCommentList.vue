<template>
  <div v-if="comments.length > 0" class="flex">
    <div class="bg-white w-full rounded-xl p-4 space-y-2">
      <article class="prose">
        <h2>Комментарии</h2>
      </article>
      <article v-for="comment in comments" :key="comment.id" class="prose max-w-none">
        <h3>{{ comment.email }}</h3>
        <p>{{ comment.body }}</p>
      </article>
    </div>
  </div>
  <AppLoader v-show="isLoadingComments"/>
  <app-button
      @action="$emit('loadComponents')"
  >Загрузить комментарии
  </app-button>
</template>

<script>
import AppButton from '@/AppButton.vue'
import AppLoader from '@/AppLoader.vue'

export default {
  components: { AppLoader, AppButton },
  emits: ['loadComponents'],
  props: [
    'comments',
    'isLoadingComments'
  ]
}
</script>

<style lang="scss" scoped>

</style>

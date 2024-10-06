<template>
  <div v-if="userResume.length > 0">
    <div v-for="item in userResume" :key="item.key" class="">
      <div v-if="item.key === 'title'">
        <article class="prose">
          <h1>Резюме {{ item.value }}</h1>
        </article>
      </div>
      <div v-else-if="item.key === 'avatar'">
        <div class="flex justify-center p-4">
          <div class="avatar">
            <div class="w-40 rounded-xl">
              <img :src="item.value" alt="{{item.key}}"/>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="item.key === 'subtitle'">
        <article class="prose">
          <h2>{{ item.value }}</h2>
        </article>
      </div>
      <div v-else-if="item.key === 'text'">
        <article class="prose">
          <p class="indent-10">{{item.value}}</p>
        </article>
      </div>
    </div>
  </div>
  <div v-else>
    <article class="prose">
      <h2>Загрузите резюме</h2>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    userResume: {
      type: Object
    }
  },
  mounted () {
    // console.log(this.userResume)
  }
}
</script>

<style lang="scss" scoped>

</style>

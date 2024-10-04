<template>
  <div v-if="people.length !== 0" class="bg-white rounded-3xl w-auto p-7">
    <div
        v-for="person in people"
        :key="person.id"
    >{{ person.firstName }}</div>
  </div>
  <div v-else class="bg-white rounded-3xl w-auto p-7 flex justify-center">
    <button class="btn btn-success" @click="$emit('load')">Загрузить пользователей</button>
  </div>
</template>

<script>
export default {
  emits: ['load'],
  props: ['people']
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <app-page title="Помощь">
      <div class="">
          <question-item v-for="(question, inx) in questions" :key="inx" :question="question" />
      </div>
    </app-page>
  </div>
</template>

<script setup lang="ts">
import QuestionItem from "@/components/question/QuestionItem.vue";

const questions = [
  {title: 'Что есть в данной системе?', text: 'Тут есть все, для того, чтобы смотреть, какие за'},
  {title: 'Как тут работает авторизация?', text: 'Все реализовано через Firebase '}
]
import AppPage from "@/components/ui/AppPage.vue";
</script>

<style scoped>

</style>
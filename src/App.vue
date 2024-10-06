<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="flex space-x-3">
      <form @submit.prevent="" class="bg-white rounded-xl min-w-80 w-1/3 p-4 space-y-2">
        <AppSelect
            v-model="selectedOption"
            :options="options"
            label="Тип блока"
        />
        <AppTextarea
            v-model="textValue"
            label="Значение"
            placeholder="Введите текст"
        />
        <app-button
            type="submit"
            color="btn-primary"
            @action="submitSelection"
            :class="{ 'btn-disabled': textValue.length < 3 }"
        >Добавить
        </app-button>
      </form>
      <div class="bg-white rounded-xl w-2/3 p-4">
        <AppResume
            :userResume="userResume"
        />
      </div>
    </div>
    <AppCommentList
        :comments="comments"
        @load-components="loadComments"
        :isLoadingComments="isLoadingComments"
    />
  </div>
</template>

<script>
import AppSelect from '@/AppSelect.vue'
import AppTextarea from '@/AppTextarea.vue'
import AppButton from '@/AppButton.vue'
import AppResume from '@/AppResume.vue'
import AppCommentList from '@/AppCommentList.vue'
import axios from 'axios'

export default {
  components: {
    AppCommentList,
    AppResume,
    AppButton,
    AppTextarea,
    AppSelect
  },
  data () {
    return {
      selectedOption: null,
      textValue: '',
      options: [
        { id: 'title', name: 'Заголовок' },
        { id: 'subtitle', name: 'Подзаголовок' },
        { id: 'avatar', name: 'Аватар' },
        { id: 'text', name: 'Текст' }
      ],
      userResume: [
        { key: 'title', value: 'Ангелина' },
        { key: 'avatar', value: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },
        { key: 'subtitle', value: 'О себе' },
        {
          key: 'text',
          value: 'Я увлечённый разработчик с опытом работы в области веб-программирования. Люблю создавать удобные и функциональные интерфейсы, а также оптимизировать код для достижения наилучшей производительности. В свободное время изучаю новые технологии и работаю над личными проектами. Ценю командную работу и всегда стремлюсь к новым вызовам в своей профессиональной карьере.'
        },
        { key: 'subtitle', value: 'Опыт работы' },
        {
          key: 'text',
          value: 'В своей последней роли я отвечал за архитектуру и реализацию микросервисной архитектуры, что значительно повысило производительность и масштабируемость приложения. Участвовал в разработке нескольких крупных проектов, где сотрудничал с командами разработчиков и дизайнерами. В процессе работы активно применял методологии Agile, что позволило эффективно управлять проектами и достигать поставленных целей в срок.'
        }
      ],
      comments: [],
      isLoadingComments: false
    }
  },
  mounted () {
    this.selectedOption = this.options[0]
  },
  methods: {
    submitSelection () {
      this.userResume.push({
        key: this.selectedOption.id,
        value: this.textValue
      })
    },
    async loadComments () {
      this.isLoadingComments = true
      const url = 'https://jsonplaceholder.typicode.com/comments'
      const { data } = await axios.get(url, {})
      this.comments = data
      this.isLoadingComments = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

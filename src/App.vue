<template>
  <div class="container mx-auto space-y-3 pt-3">
    <div class="flex space-x-3">
      <form @submit.prevent="submitSelection" class="bg-white rounded-xl min-w-80 w-1/3 p-4 space-y-2">
        <AppSelect
            v-model="selectedOption"
            :options="options"
            label="Тип блока"
        />
        <label class="form-control">
          <div class="label">
            <span class="label-text">Значение</span>
          </div>
          <textarea class="textarea  textarea-bordered h-24" placeholder="Bio"></textarea>
        </label>
        <button type="submit" class="btn">Добавить</button>
      </form>
      <div class="bg-white rounded-xl w-2/3 p-4">
        <article class="prose">
          <h1>Резюме Имя</h1>
        </article>
        <div class="flex justify-center p-4">
          <div class="avatar">
            <div class="w-40 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
            </div>
          </div>
        </div>
        <article class="prose">
          <h2>О себе</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
        </article>
        <article class="prose">
          <h2>Опыт работы</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
        </article>
      </div>
    </div>
    <div class="flex">
      <div class="bg-white w-full rounded-xl p-4 space-y-2">
        <article class="prose">
          <h2>Комментарии</h2>
        </article>
        <article class="prose max-w-none">
          <h3>asdasd@asda.asc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore expedita fuga illo nobis quaerat quisquam
            voluptate! Accusantium cumque deleniti earum, est quos rerum sint vero. Atque omnis placeat quas
            repellat?</p>
        </article>
        <div class="divider"></div>
        <article class="prose max-w-none">
          <h3>asdasd@asda.asc</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore expedita fuga illo nobis quaerat quisquam
            voluptate! Accusantium cumque deleniti earum, est quos rerum sint vero. Atque omnis placeat quas
            repellat?</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import AppSelect from '@/AppSelect.vue'

export default {
  components: {
    AppSelect
  },
  data () {
    return {
      selectedOption: null,
      options: [
        { id: 'title', name: 'Заголовок' },
        { id: 'subtitle', name: 'Подзаголовок' },
        { id: 'avatar', name: 'Аватар' },
        { id: 'text', name: 'Текст' }
      ]
    }
  },
  mounted () {
    this.selectedOption = this.options[0]
  },
  methods: {
    submitSelection () {
      console.log(this.selectedOption)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

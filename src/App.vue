<template>
  <div class="container h-dvh">
    <div class="bg-white mx-auto bg-neutral-100 rounded-3xl  w-96 p-7">
      <form class="space-y-3" @submit.prevent="submitHandler">
        <h2>Анкета на Vue разработчика!</h2>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Как тебя зовут?</span>
          </div>
          <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              v-model.trim="name"
          />
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Выбери возраст?</span>
          </div>
          <input
              type="number"
              id="age"
              max="90"
              class="input input-bordered w-full max-w-xs"
              v-model.number="age"
          />
        </label>
        <select v-model="city" class="select select-bordered w-full max-w-xs">
          <option disabled selected>Твой город</option>
          <option value="tmb">Тамбов</option>
          <option value="vrn">Воронеж</option>
        </select>
        <div class="label">
          <span class="label-text">Готов к переезду в Токио?</span>
        </div>
        <div class="form-control w-max">
          <label class="label cursor-pointer space-x-2">
            <input v-model="relocate" value="yes" type="radio" name="trip" class="radio checked:bg-red-500"/>
            <span class="label-text">Да</span>
          </label>
          <label class="label cursor-pointer space-x-2">
            <input v-model="relocate" value="no" type="radio" name="trip" class="radio checked:bg-red-500"/>
            <span class="label-text">Нет</span>
          </label>
        </div>
        <div class="label">
          <span class="label-text">Что знаешь во Vue?</span>
        </div>
        <div class="form-control w-max ">
          <label class="label cursor-pointer space-x-2">
            <input type="checkbox" checked="checked" v-model="skills" name="skills" value="Vuex" class="checkbox"/>
            <span class="label-text">Vuex</span>
          </label>
          <label class="label cursor-pointer space-x-2">
            <input type="checkbox" v-model="skills" name="skills" value="Vue-CLI" class="checkbox"/>
            <span class="label-text">Vue CLI</span>
          </label>
          <label class="label cursor-pointer space-x-2">
            <input type="checkbox" v-model="skills" name="skills" value="Vue-Router" class="checkbox"/>
            <span class="label-text">Vue Router</span>
          </label>
        </div>
        <label class="label cursor-pointer space-x-2">
          <input type="checkbox" v-model="agree" class="checkbox"/>
          <span class="label-text">Vue Router</span>
        </label>
        <button type="submit" class="btn btn-outline btn-success">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: '',
      age: 23,
      city: 'vrn',
      relocate: null,
      skills: [],
      agree: false
    }
  },
  methods: {
    submitHandler () {
      console.group('Form data')
      console.log('Name:' + this.name)
      console.log('Age:' + this.age)
      console.log('City:' + this.city)
      console.log('Relocate:' + this.relocate)
      console.log('Skills:' + this.skills)
      console.log('Agree:' + this.agree)
      console.groupEnd()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

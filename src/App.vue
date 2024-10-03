<template>
  <div class="container h-dvh">
    <div class="bg-white mx-auto bg-neutral-100 rounded-3xl  w-96 p-7">
      <form class="space-y-3" @submit.prevent="submitHandler">
        <h2>Анкета на Vue разработчика!</h2>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Как тебя зовут?</span>
          </div>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
        </label>
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Выбери возраст?</span>
          </div>
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"/>
        </label>
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Твой город</option>
          <option>Тамбов</option>
          <option>Воронеж</option>
        </select>
        <div class="label">
          <span class="label-text">Готов к переезду в Токио?</span>
        </div>
        <div class="form-control w-max">
          <label class="label cursor-pointer space-x-2">
            <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked="checked"/>
            <span class="label-text">Да</span>
          </label>
          <label class="label cursor-pointer space-x-2">
            <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked="checked"/>
            <span class="label-text">Нет</span>
          </label>
        </div>
        <div class="label">
          <span class="label-text">Что знаешь во Vue?</span>
        </div>
        <div class="form-control w-max ">
          <label class="label cursor-pointer space-x-2">
            <input type="checkbox" checked="checked" class="checkbox"/>
            <span class="label-text">Vuex</span>
          </label>
          <label class="label cursor-pointer space-x-2">
            <input type="checkbox" checked="checked" class="checkbox"/>
            <span class="label-text">Vue CLI</span>
          </label>
          <label class="label cursor-pointer space-x-2">
            <input type="checkbox" checked="checked" class="checkbox"/>
            <span class="label-text">Vue Router</span>
          </label>
        </div>
        <button type="submit" class="btn btn-outline btn-success">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    submitHandler () {
      console.log('submitHandler')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="container mx-auto space-y-5">
    <app-alert :alert="alert" @close="alert=null"></app-alert>
    <div class="bg-white rounded-3xl w-auto p-7">
      <form class="form-control space-y-5" @submit.prevent="createPerson">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">What is your name?</span>
          </div>
          <input
              v-model="name"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
          />
        </label>
        <div class="">
          <button class="btn" :disabled="name.length === 0">Создать человека</button>
        </div>
      </form>
    </div>

    <app-people-list
        @load="loadPeople"
        @remove="removePerson"
        :people="people"
    ></app-people-list>

  </div>
</template>

<script>
import AppPeopleList from '@/AppPeopleList.vue'
import axios from 'axios'
import AppAlert from '@/AppAlert.vue'

export default {
  data () {
    return {
      name: '',
      people: [],
      alert: null
    }
  },
  mounted () {
    this.loadPeople()
  },
  methods: {
    async createPerson () {
      const url = 'https://vue-yt-2f717-default-rtdb.europe-west1.firebasedatabase.app/people.json'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const fireBaseData = await response.json()
      this.people.push({
        firstName: this.name,
        id: fireBaseData.name
      })
      this.name = ''
    },
    async loadPeople () {
      try {
        const { data } = await axios.get('https://vue-yt-2f717-default-rtdb.europe-west1.firebasedatabase.app/people.json')
        if (!data) {
          throw new Error('нет пользователей')
        }
        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
      } catch (e) {
        this.alert = {
          type: 'error',
          title: 'Ошибка',
          text: e.message
        }
      }
    },
    async removePerson (id) {
      await axios.delete(`https://vue-yt-2f717-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
      this.people = this.people.filter(person => person.id !== id)
    }
  },
  components: { AppAlert, AppPeopleList }
}
</script>

<style lang="scss" scoped>
</style>

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
    <app-loader v-if="loading"></app-loader>
    <app-people-list
        v-else
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
import AppLoader from '@/AppLoader.vue'

export default {
  data () {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
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
        this.loading = true
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
        this.loading = false
      } catch (e) {
        this.alert = {
          type: 'error',
          title: 'Ошибка',
          text: e.message
        }
        this.loading = false
        console.log(e.message)
      }
    },
    async removePerson (id) {
      try {
        // const person = this.people.filter(person => person.id === id)[0]
        const person = this.people.find(person => person.id === id)
        await axios.delete(`https://vue-yt-2f717-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'info',
          title: 'Информация',
          text: 'Пользователь ' + person.firstName + ' удален'
        }
      } catch (e) {
        this.alert = {
          type: 'error',
          title: 'Ошибка',
          text: e.message
        }
      }
    }
  },
  components: { AppLoader, AppAlert, AppPeopleList }
}
</script>

<style lang="scss" scoped>
</style>

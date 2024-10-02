<template>
  <div>
    <h3> {{ title }}</h3>
    <app-button @action="open()">{{isOpen ? 'закрыть' : 'открыть'}}</app-button>
    <div v-if="isOpen">
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi placeat quibusdam sint
        temporibus
        totam?</p>
      <app-button v-if="!wasRead" @action="toRedNews">Прочесть новость</app-button>
      <app-button color="btn-warning" v-if="wasRead" @action="notReadNews">Отметить непрочитанной</app-button>
      <app-new-list></app-new-list>
    </div>

  </div>
</template>

<script>
import AppButton from '@/AppButton.vue'
import AppNewList from '@/AppNewList.vue'

export default {
  components: { AppButton, AppNewList },
  // props: [
  //   'title'
  // ],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator: (value) => {
        return value !== undefined && value !== null
      }
    },
    wasRead: {
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      // isOpen: false
    }
  },
  methods: {
    open () {
      this.$emit('toggle')
      if (!this.isOpen) {
        this.$emit('open-rate')
      }
    },
    toRedNews () {
      this.$emit('read-news')
      this.open()
    },
    notReadNews () {
      this.$emit('not-read-news')
      this.open()
    }
  },
  emits: [
    'toggle',
    'open-rate',
    'read-news',
    'not-read-news'
  ]
  // emits: {
  //   toggle: null,
  //   'open-rate' (num) {
  //     if (num) {
  //       return true
  //     }
  //     console.warn('no data in open-rate emit')
  //     return false
  //   }
  // }
}
</script>

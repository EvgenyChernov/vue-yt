<script>
export default {
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

<template>
  <div>
    <h3> {{ title }}</h3>
    <button @click="open()" class="btn btn-primary btn-sm">{{ isOpen ? 'закрыть' : 'открыть' }}</button>
    <div v-if="isOpen" class="">
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi placeat quibusdam sint
        temporibus
        totam?</p>
      <button v-if="!wasRead" @click="toRedNews" class="btn btn-secondary btn-sm">Прочесть новость</button>
      <button v-if="wasRead" @click="notReadNews" class="btn btn-secondary btn-sm">Отметить непрочитанной</button>
    </div>

  </div>
</template>

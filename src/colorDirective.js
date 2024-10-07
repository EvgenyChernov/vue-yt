let interval
export default {
  mounted (el, binding, vnode) {
    // el.style.color = binding.value
    el.style[binding.arg] = binding.value
    if (binding.modifiers.blink) {
      interval = setInterval(() => {
        const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
        el.style.color = randomColor()
      }, 1000)
    }
  },
  updated (el, binding, vnode, prevVnode) {
    el.style[binding.arg] = binding.value
  },
  unmounted (el, binding, vnode) {
    if (interval) {
      clearInterval(interval)
    }
  }
}

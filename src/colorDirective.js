let interval
let defaultColor
const mouseover = event => {
  event.target.style.color = 'blue'
}
const mouseout = event => {
  event.target.style.color = defaultColor
}

export default {
  mounted (el, binding, vnode) {
    // el.style.color = binding.value
    defaultColor = binding.value
    el.style[binding.arg] = binding.value
    if (binding.modifiers.blink) {
      interval = setInterval(() => {
        const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
        el.style.color = randomColor()
      }, 1000)
    }
    if (binding.modifiers.hover) {
      el.addEventListener('mouseover', mouseover)
      el.addEventListener('mouseout', mouseout)
    }
  },
  updated (el, binding, vnode, prevVnode) {
    el.style[binding.arg] = binding.value
  },
  unmounted (el, binding, vnode) {
    // не забывать удалять события и таймауты, что бы избежать утечек памяти
    removeEventListener('mouseover', mouseover)
    removeEventListener('mouseout', mouseout)
    if (interval) {
      clearInterval(interval)
    }
  }
}

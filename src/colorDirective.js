export default {
  mounted (el, binding, vnode) {
    // el.style.color = binding.value
    el.style[binding.arg] = binding.value
  },
  updated (el, binding, vnode, prevVnode) {
    el.style[binding.arg] = binding.value
  },
  unmounted (el, binding, vnode) {
  }
}

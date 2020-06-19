import PopupChat from './PopupChat.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('PopupChat', PopupChat)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}

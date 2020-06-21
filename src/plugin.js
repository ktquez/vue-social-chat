import SocialChat from './SocialChat.vue'

export default function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('SocialChat', SocialChat)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  window.Vue.use(install)
}

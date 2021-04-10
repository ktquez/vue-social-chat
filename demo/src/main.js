import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSocialChat from '../../src'

createApp(App)
  .use(VueSocialChat)
  .use(router)
  .mount('#app')

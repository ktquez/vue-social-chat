import Vue from 'vue'
import App from './App.vue'
import VueSocialChat from '../vue-social-chat'

Vue.use(VueSocialChat)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

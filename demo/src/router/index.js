import Vue from 'vue'
import VueRouter from 'vue-router'
import WhatsApp from '../views/WhatsApp.vue'
import Telegram from '../views/Telegram.vue'
import Messeger from '../views/Messeger.vue'
import WeChat from '../views/WeChat.vue'
import Twitter from '../views/Twitter.vue'
import Viber from '../views/Viber.vue'
import Line from '../views/Line.vue'
import Email from '../views/Email.vue'
import Mixed from '../views/Mixed.vue'
import Custom from '../views/Custom.vue'
import rtl from '../views/RTL.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/whatsapp',
    component: WhatsApp
  },
  {
    path: '/messeger',
    component: Messeger
  },
  {
    path: '/telegram',
    component: Telegram
  },
  {
    path: '/wechat',
    component: WeChat
  },
  {
    path: '/twitter',
    component: Twitter
  },
  {
    path: '/viber',
    component: Viber
  },
  {
    path: '/line',
    component: Line
  },
  {
    path: '/email',
    component: Email
  },
  {
    path: '/mixed',
    component: Mixed
  },
  {
    path: '/custom',
    component: Custom
  },
  {
    path: '/rtl',
    component: rtl
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

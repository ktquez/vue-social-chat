import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/whatsapp',
    component: () => import(/* webpackChunkName: "whats-app" */ '../views/WhatsApp.vue')
  },
  {
    path: '/messeger',
    component: () => import(/* webpackChunkName: "messeger" */ '../views/Messeger.vue')
  },
  {
    path: '/telegram',
    component: () => import(/* webpackChunkName: "telegram" */ '../views/Telegram.vue')
  },
  {
    path: '/wechat',
    component: () => import(/* webpackChunkName: "we-chat" */ '../views/WeChat.vue')
  },
  {
    path: '/twitter',
    component: () => import(/* webpackChunkName: "twitter" */ '../views/Twitter.vue')
  },
  {
    path: '/viber',
    component: () => import(/* webpackChunkName: "viber" */ '../views/Viber.vue')
  },
  {
    path: '/line',
    component: () => import(/* webpackChunkName: "line" */ '../views/Line.vue')
  },
  {
    path: '/email',
    component: () => import(/* webpackChunkName: "email" */ '../views/Email.vue')
  },
  {
    path: '/mixed',
    component: () => import(/* webpackChunkName: "mixed" */ '../views/Mixed.vue')
  },
  {
    path: '/custom',
    component: () => import(/* webpackChunkName: "custom" */ '../views/Custom.vue')
  },
  {
    path: '/rtl',
    component: () => import(/* webpackChunkName: "rtl" */ '../views/RTL.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

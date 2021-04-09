import * as VueRouter from 'vue-router'
import routes from './routes'

export const router =  VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  linkExactActiveClass: 'is-active',
  routes
})

export default router

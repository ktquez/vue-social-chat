import VueSocialChat from '../../dist/vue-social-chat.esm'

export default ({ Vue, isServer }) => {
  if (!isServer) {
    Vue.use(VueSocialChat)
  }
}
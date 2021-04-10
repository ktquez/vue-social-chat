<template>
  <h1>WeChat click to chat</h1>
  <h2>Example: without slot header</h2>
  <VueSocialChat
    icon
    class="wechat-chat"
    :attendants="attendants"
  >
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/wechat.svg"
        alt="icon wechat"
        aria-hidden="true"
      >
    </template>
    <template v-slot:footer>
      <small>
        Call us to
        <a href="tel:+55988656544" title="Call us">+55 95865-6544</a>
        from 8:00hs a 18:00hs
      </small>
    </template>
  </VueSocialChat>
</template>

<script>
export default {
  name: 'WeChatPage',
  setup () {
    const attendants = [
      {
        app: 'wechat',
        label: 'Support',
        name: 'Alan Ktquez',
        id: '111',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/8084606?v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'wechat',
        label: 'Sales',
        name: 'Alexia Chapman',
        id: '111',
        avatar: {
          src: 'https://randomuser.me/api/portraits/women/63.jpg',
          alt: 'Alexia Chapman avatar'
        }
      },
      {
        app: 'wechat',
        label: 'Developer',
        name: 'Lucas Lima',
        id: '777',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/40927839?v=4',
          alt: 'Lucas Lima avatar'
        }
      }
    ]

    return { attendants }
  }
}
</script>

<style lang="stylus">
.wechat-chat
  --wechat #00ba59
  --vsc-bg-header var(--wechat)
  --vsc-bg-button var(--wechat)
  --vsc-outline-color var(--wechat)
</style>

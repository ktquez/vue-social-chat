<template>
  <div>
    <hr>
    <h1>WeChat click to chat</h1>
    <h2>Example: without slot header</h2>
    <SocialChat
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
          <a
            href="tel:+55988656544"
            title="Call us"
          >
            +55 95865-6544
          </a>
          from 8:00hs a 18:00hs
        </small>
      </template>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from '../../vue-social-chat'

export default {
  name: 'WeChatPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'wechat',
        label: 'Support',
        name: 'Alan Ktquez',
        id: '111',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
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
      }
    ]
  })
}
</script>

<style>
.wechat-chat {
  --wechat: #00ba59;
  --vsc-bg-header: var(--wechat);
  --vsc-bg-button: var(--wechat);
  --vsc-outline-color: var(--wechat);
}
</style>

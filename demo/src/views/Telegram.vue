<template>
  <div>
    <hr>
    <h1>Telegram click to chat (without slot footer)</h1>
    <h2>Example: Without slot footer</h2>
    <SocialChat
      icon
      class="telegram-chat"
      :attendants="attendants"
    >
      <template v-slot:header>
        <p>Click one of our representatives below to chat on Telegram.</p>
      </template>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/telegram.svg"
          alt="icon telegram"
          aria-hidden="true"
        >
      </template>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from '../../vue-social-chat'

export default {
  name: 'TelegramPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'telegram',
        label: 'Support',
        name: 'Alan Ktquez',
        username: 'ktquez',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'telegram',
        label: 'Sales',
        name: 'Alexia Chapman',
        username: 'pombo',
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
.telegram-chat {
  --telegram: #039be5;
  --vsc-bg-header: var(--telegram);
  --vsc-bg-button: var(--telegram);
  --vsc-outline-color: var(--telegram);
}
</style>

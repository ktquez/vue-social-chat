# Telegram

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat
      icon
      class="telegram-chat"
      :attendants="attendants"
    >
      <p slot="header">Click one of our representatives below to chat on Telegram.</p>
      <MyTelegramIcon slot="button" />
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'TelegramPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'telegram',
        label: 'Technical support',
        name: 'Alan Ktquez',
        username: 'YOUR_TELEGRAM_USERNAME',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      // ...
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
```

<SocialChat
  icon
  class="telegram-chat"
  :attendants="[
    {
      app: 'telegram',
      label: 'Technical support',
      name: 'Alan Ktquez',
      username: 'ktquez',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Alan Ktquez avatar'
      }
    }
  ]"
>
  <template v-slot:header>
    <span>Click one of our representatives below to chat on Telegram.</span>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/telegram.svg"
      alt="icon telegram"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
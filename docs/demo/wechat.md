# WeChat

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat
      icon
      class="wechat-chat"
      :attendants="attendants"
    >
      <p slot="header">Click one of our representatives below to chat on WeChat.</p>
      <MyWeChatIcon slot="button" />
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'WeChatPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'wechat',
        label: 'Technical support',
        name: 'Alan Ktquez',
        id: 'YOUR_WECHAT_ID',
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
.wechat-chat {
  --wechat: #00ba59;
  --vsc-bg-header: var(--wechat);
  --vsc-bg-button: var(--wechat);
  --vsc-outline-color: var(--wechat);
}
</style>
```

<SocialChat
  icon
  class="whatsapp-chat"
  :attendants="[
    {
      app: 'wechat',
      label: 'Technical support',
      name: 'Alan Ktquez',
      id: '111',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Alan Ktquez avatar'
      }
    }
  ]"
>
  <p slot="header">Click one of our representatives below to chat on WeChat.</p>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/wechat.svg"
      alt="icon we chat"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
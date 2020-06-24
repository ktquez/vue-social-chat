# Facebook Messenger

::: tip
You can easily get the Facebook user ID via [Lookup ID website](https://lookup-id.com/#)
:::

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat
      icon
      class="messenger-chat"
      :attendants="attendants"
    >
      <p slot="header">Click one of our representatives below to chat on Messenger.</p>
      <MyMessengerIcon slot="button" />
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'MessengerPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'messenger',
        label: 'Technical support',
        name: 'Alan Ktquez',
        id: 'YOUR_FACEBOOK_ID',
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
.messenger-chat {
  --messenger: #039be5;
  --vsc-bg-header: var(--messenger);
  --vsc-bg-button: var(--messenger);
  --vsc-outline-color: var(--messenger);
}
</style>
```

<SocialChat
  icon
  class="messenger-chat"
  :attendants="[
    {
      app: 'messenger',
      label: 'Technical support',
      name: 'Alan Ktquez',
      id: '100002252063765',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Alan Ktquez avatar'
      }
    }
  ]"
>
  <template v-slot:header>
    <span>Click one of our representatives below to chat on Messenger.</span>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/messenger.svg"
      alt="icon messenger"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
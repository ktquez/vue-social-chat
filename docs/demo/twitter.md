# Twitter

::: tip
You can easily get the twitter user ID via [Tweeterid website](https://tweeterid.com/)
:::

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat
      icon
      class="twitter-chat"
      :attendants="attendants"
    >
      <p slot="header">Click one of our representatives below to chat on Twitter.</p>
      <MyTwitterIcon slot="button" />
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'TwitterPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'twitter',
        label: 'Sales',
        name: 'Alan Ktquez',
        id: 'YOUR_TWITTER_ID',
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
.twitter-chat {
  --twitter: #55acee;
  --vsc-bg-header: var(--twitter);
  --vsc-bg-button: var(--twitter);
  --vsc-outline-color: var(--twitter);
}
</style>
```

<SocialChat
  icon
  class="twitter-chat"
  :attendants="[
    {
      app: 'twitter',
      label: 'Sales',
      name: 'Alan Ktquez',
      id: '2409712082',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Alan Ktquez avatar'
      }
    }
  ]"
>
  <template v-slot:header>
    <span>Click one of our representatives below to chat on Twitter.</span>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/twitter.svg"
      alt="icon twitter"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
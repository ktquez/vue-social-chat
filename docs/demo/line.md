# Line App

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat
      icon
      class="line-chat"
      :attendants="attendants"
    >
      <p slot="header">Click one of our representatives below to chat on Line.</p>
      <MyLineIcon slot="button" />
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'LinePage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'line',
        label: 'Technical support',
        name: 'Alan Ktquez',
        username: 'YOUR_LINE_USERNAME',
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
.line-chat {
  --line: #22ba4f;
  --vsc-bg-header: var(--line);
  --vsc-bg-button: var(--line);
  --vsc-outline-color: var(--line);
}
</style>
```

<SocialChat
  icon
  class="line-chat"
  :attendants="[
    {
      app: 'line',
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
    <span>Click one of our representatives below to chat on Line.</span>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/line.svg"
      alt="icon line"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
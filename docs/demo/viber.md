# Viber

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat
      icon
      class="viber-chat"
      :attendants="attendants"
    >
      <p slot="header">Click one of our representatives below to chat on Viber.</p>
      <MyViberIcon slot="button" />
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'ViberPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'viber',
        label: 'Technical support',
        name: 'Alan Ktquez',
        number: 'YOUR_PHONE_NUMBER',
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
.viber-chat {
  --viber: #6f3faa;
  --vsc-bg-header: var(--viber);
  --vsc-bg-button: var(--viber);
  --vsc-outline-color: var(--viber);
}
</style>
```

<SocialChat
  icon
  class="viber-chat"
  :attendants="[
    {
      app: 'viber',
      label: 'Technical support',
      name: 'Alan Ktquez',
      number: '5581983383532',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Alan Ktquez avatar'
      }
    }
  ]"
>
  <template v-slot:header>
    <span>Click one of our representatives below to chat on Viber.</span>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/viber.svg"
      alt="icon viber"
      aria-hidden="true"
    >
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
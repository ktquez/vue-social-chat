# Mixed chat apps

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat :attendants="attendants">
      <p slot="header">Click one of our representatives below to chat.</p>
      <template v-slot:button="{ open }">
        <span v-show="!open">Contact us</span>
        <span v-show="open">Close</span>
      </template>
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'WhatsAppPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'whatsapp',
        label: 'Support',
        name: 'Alan Ktquez',
        number: 'YOUR_PHONE_NUMBER',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Avatar Support Alan Ktquez'
        }
      },
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
      {
        app: 'twitter',
        label: 'Human Resources',
        name: 'Alan Ktquez',
        id: 'YOUR_TWITTER_ID',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Avatar Support Alan Ktquez'
        }
      }
    ]
  })
}
</script>
```

<SocialChat
  :attendants="[
    {
      app: 'whatsapp',
      label: 'Support',
      name: 'Alan Ktquez',
      number: '5581983383532',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Avatar Support Alan Ktquez'
      }
    },
    {
      app: 'messenger',
      label: 'Technical support',
      name: 'Alan Ktquez',
      id: '100002252063765',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Alan Ktquez avatar'
      }
    },
    {
      app: 'twitter',
      label: 'Human Resources',
      name: 'Alan Ktquez',
      id: '2409712082',
      avatar: {
        src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
        alt: 'Avatar Support Alan Ktquez'
      }
    }
  ]"
>
  <p slot="header">Click one of our representatives below to chat.</p>
  <template v-slot:button="{ open }">
    <span v-show="!open">Contact us</span>
    <span v-show="open">Close</span>
  </template>
  <small slot="footer">Opening hours: 8am to 6pm</small>
</SocialChat>
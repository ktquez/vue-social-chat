<template>
  <div>
    <hr>
    <h1>Twitter click to chat</h1>
    <h2>Example: Without slot header and footer</h2>
    <SocialChat
      icon
      class="twitter-chat"
      :attendants="attendants"
    >
      <template v-slot:icon>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/twitter.svg"
          alt="icon twitter"
          aria-hidden="true"
        >
      </template>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from '../../vue-social-chat'

export default {
  name: 'TwittePage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'twitter',
        label: 'Support',
        name: 'Alan Albuquerque',
        id: '2409712082',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Avatar Support Alan Albuquerque'
        }
      },
      {
        app: 'twitter',
        label: 'Support TI',
        name: 'Rodrigo Pombo',
        id: '17796425',
        avatar: {
          src: 'https://avatars3.githubusercontent.com/u/1911623?s=460&u=e229be53a0816de373a668ad8f74e20b30c056c8&v=4',
          alt: 'Avatar Support Rodrigo Pombo'
        }
      }
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

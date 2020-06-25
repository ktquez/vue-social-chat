<template>
  <div>
    <hr>
    <h1>Messeger click to chat demo</h1>
    <h2>Example: Custom header color</h2>
    <SocialChat
      icon
      class="messenger-chat"
      :attendants="attendants"
    >
      <template v-slot:header>
        <p style="font-weight: 500">
          Click one of our representatives below to chat on Messeger.
        </p>
      </template>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/messenger.svg"
          alt="icon messenger"
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
  name: 'MessegerPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'messenger',
        label: 'Support',
        name: 'Alan Ktquez',
        id: '100002252063765',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'messenger',
        label: 'Sales',
        name: 'Alexia Chapman',
        id: '100002252063765',
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
.messenger-chat {
  --messenger: #039be5;
  --vsc-bg-header: var(--messenger);
  --vsc-bg-button: var(--messenger);
  --vsc-outline-color: var(--messenger);
  --vsc-border-color-bottom-header: #0085C7;
}
</style>

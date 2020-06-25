<template>
  <div>
    <hr>
    <h1>Viber click to chat demo</h1>
    <SocialChat
      icon
      class="viber-chat"
      :attendants="attendants"
    >
      <template v-slot:header>
        <p>Click one of our representatives below to chat on Viber.</p>
      </template>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/viber.svg"
          alt="icon viber"
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
  name: 'ViberPage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'viber',
        label: 'Support',
        name: 'Alan Ktquez',
        number: '5581983383532',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'viber',
        label: 'Sales',
        name: 'Alexia Chapman',
        number: '5581983383532',
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
.viber-chat {
  --viber: #6f3faa;
  --vsc-bg-header: var(--viber);
  --vsc-bg-button: var(--viber);
  --vsc-outline-color: var(--viber);
}
</style>

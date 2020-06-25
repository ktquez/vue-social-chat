<template>
  <div>
    <hr>
    <h1>Line click to chat demo</h1>
    <SocialChat
      icon
      class="line-chat"
      :attendants="attendants"
    >
      <template v-slot:header>
        <p>Click one of our representatives below to chat on Line.</p>
      </template>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/line.svg"
          alt="icon line"
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
  name: 'LinePage',

  components: {
    SocialChat
  },

  data: () => ({
    attendants: [
      {
        app: 'line',
        label: 'Support',
        name: 'Alan Ktquez',
        username: '@linedevelopers',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'line',
        label: 'Sales',
        name: 'Alexia Chapman',
        username: '@linedevelopers',
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
.line-chat {
  --line: #22ba4f;
  --vsc-bg-header: var(--line);
  --vsc-bg-button: var(--line);
  --vsc-outline-color: var(--line);
}
</style>

<template>
  <div>
    <hr>
    <h1>Whatsapp click to chat demo</h1>
    <SocialChat
      icon
      class="whatsapp-chat"
      :attendants="attendants"
    >
      <p slot="header">
        Click one of our representatives below to chat on WhatsApp.
      </p>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >
      </template>
      <small slot="footer">
        Call us to
        <a
          href="tel:+55988656544"
          title="Call us"
        >
          +55 95865-6544
        </a>
        from 8:00hs a 18:00hs
      </small>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from '../../vue-social-chat'

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
        name: 'Alan Albuquerque',
        number: '5581983383532',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Avatar Support Alan Albuquerque'
        }
      },
      {
        app: 'whatsapp',
        label: 'Support TI',
        name: 'Rodrigo Pombo',
        number: '5581987654321',
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
.whatsapp-chat {
  --whatsapp: #46c056;
  --vsc-bg-header: var(--whatsapp);
  --vsc-bg-button: var(--whatsapp);
  --vsc-outline-color: var(--whatsapp);
}
</style>

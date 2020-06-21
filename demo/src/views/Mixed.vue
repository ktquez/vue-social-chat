<template>
  <div>
    <hr>
    <h1>Text button and mixed app chats in list</h1>
    <SocialChat
      :icon="false"
      :attendants="attendants"
    >
      <template v-slot:header>
        <p>Click one of our representatives below to chat</p>
      </template>
      <template v-slot:icon="{ open }">
        <span v-show="!open">Contact us</span>
        <span v-show="open">Close</span>
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
        app: 'messenger',
        label: 'Support TI',
        name: 'Rodrigo Pombo',
        id: '100002252063765',
        avatar: {
          src: 'https://avatars3.githubusercontent.com/u/1911623?s=460&u=e229be53a0816de373a668ad8f74e20b30c056c8&v=4',
          alt: 'Avatar Support Rodrigo Pombo'
        }
      },
      {
        app: 'twitter',
        label: 'Human Resources',
        name: 'Alan Albuquerque',
        id: '2409712082',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Avatar Support Alan Albuquerque'
        }
      }
    ]
  })
}
</script>

<style>

</style>

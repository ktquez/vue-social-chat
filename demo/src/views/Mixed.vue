<template>
  <div>
    <hr>
    <h1>Text button and mixed app chats in list</h1>
    <SocialChat
      :attendants="attendants"
    >
      <template v-slot:header>
        <p style="font-weight: 500">
          Click one of our representatives below to chat
        </p>
      </template>
      <template v-slot:button="{ open }">
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
        name: 'Alan Ktquez',
        number: '5581983383532',
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
      },
      {
        app: 'twitter',
        label: 'Human Resources',
        name: 'Alan Ktquez',
        id: '2409712082',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      }
    ]
  })
}
</script>

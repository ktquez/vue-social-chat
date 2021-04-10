<template>
  <h1>Text button and mixed app chats in list</h1>
  <VueSocialChat
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
  </VueSocialChat>
</template>

<script>
export default {
  name: 'WhatsAppPage',
  setup () {
    const attendants = [
      {
        app: 'whatsapp',
        label: 'Support',
        name: 'Alan Ktquez',
        number: '5581983383532',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/8084606?v=4',
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
        app: 'telegram',
        label: 'Developer',
        name: 'Lucas Lima',
        username: 'lucasferreiralimax',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/40927839?v=4',
          alt: 'Lucas Lima avatar'
        }
      }
    ]

    return { attendants }
  }
}
</script>

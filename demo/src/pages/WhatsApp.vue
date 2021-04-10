<template>
  <h1>Whatsapp click to chat demo</h1>
  <VueSocialChat
    icon
    class="whatsapp-chat"
    :attendants="attendants"
  >
    <template v-slot:header>
      <p>Click one of our representatives below to chat on WhatsApp.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
        alt="icon whatsapp"
        aria-hidden="true"
      >
    </template>
    <template v-slot:footer>
      <small>
        Call us to
        <a href="tel:+55988656544" title="Call us">+55 95865-6544</a>
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
        app: 'whatsapp',
        label: 'Sales',
        name: 'Alexia Chapman',
        number: '5581987654321',
        avatar: {
          src: 'https://randomuser.me/api/portraits/women/63.jpg',
          alt: 'Alexia Chapman avatar'
        }
      },
      {
        app: 'whatsapp',
        label: 'Developer',
        name: 'Lucas Lima',
        number: '5583996749477',
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

<style lang="stylus">
.whatsapp-chat
  --whatsapp #46c056
  --vsc-bg-header var(--whatsapp)
  --vsc-bg-button var(--whatsapp)
  --vsc-outline-color var(--whatsapp)
  --vsc-border-color-bottom-header #289D37

  .vsc-popup-header p
    font-weight 500
</style>

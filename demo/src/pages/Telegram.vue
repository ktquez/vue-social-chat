<template>
  <h1>Telegram click to chat (without slot footer)</h1>
  <h2>Example: Without slot footer</h2>
  <VueSocialChat
    icon
    class="telegram-chat"
    :attendants="attendants"
  >
    <template v-slot:header>
      <p>Click one of our representatives below to chat on Telegram.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/telegram.svg"
        alt="icon telegram"
        aria-hidden="true"
      >
    </template>
  </VueSocialChat>
</template>

<script>
export default {
  name: 'TelegramPage',
  setup () {
    const attendants = [
      {
        app: 'telegram',
        label: 'Support',
        name: 'Alan Ktquez',
        username: 'ktquez',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/8084606?v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'telegram',
        label: 'Sales',
        name: 'Alexia Chapman',
        username: 'pombo',
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

<style lang="stylus">
.telegram-chat
  --telegram #039be5
  --vsc-bg-header var(--telegram)
  --vsc-bg-button var(--telegram)
  --vsc-outline-color var(--telegram)
</style>

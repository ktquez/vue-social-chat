<template>
  <h1>Messeger click to chat demo</h1>
  <h2>Example: Custom header color</h2>
  <VueSocialChat
    icon
    class="messenger-chat"
    :attendants="attendants"
  >
    <template v-slot:header>
      <p>Click one of our representatives below to chat on Messeger.</p>
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
  </VueSocialChat>
</template>

<script>
export default {
  name: 'MessegerPage',
  setup () {
    const attendants = [
      {
        app: 'messenger',
        label: 'Support',
        name: 'Alan Ktquez',
        id: '100002252063765',
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
        app: 'messenger',
        label: 'Developer',
        name: 'Lucas Lima',
        id: '100003861779133',
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
.messenger-chat
  --messenger #039be5
  --vsc-bg-header var(--messenger)
  --vsc-bg-button var(--messenger)
  --vsc-outline-color var(--messenger)
  --vsc-border-color-bottom-header #0085C7

  .vsc-popup-header p
    font-weight 500
</style>

<template>
  <h1>Twitter click to chat</h1>
  <h2>Example: Without slot header and footer</h2>
  <VueSocialChat
    icon
    class="twitter-chat"
    :attendants="attendants"
  >
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/twitter.svg"
        alt="icon twitter"
        aria-hidden="true"
      >
    </template>
  </VueSocialChat>
</template>

<script>
export default {
  name: 'TwittePage',
  setup () {
    const attendants = [
      {
        app: 'twitter',
        label: 'Support',
        name: 'Alan Ktquez',
        id: '2409712082',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/8084606?v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      {
        app: 'twitter',
        label: 'Sales',
        name: 'Alexia Chapman',
        id: '17796425',
        avatar: {
          src: 'https://randomuser.me/api/portraits/women/63.jpg',
          alt: 'Alexia Chapman avatar'
        }
      },
      {
        app: 'twitter',
        label: 'Developer',
        name: 'Lucas Lima',
        id: '1128061080301862912',
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
.twitter-chat
  --twitter #55acee
  --vsc-bg-header var(--twitter)
  --vsc-bg-button var(--twitter)
  --vsc-outline-color var(--twitter)
</style>

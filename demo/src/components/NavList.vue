<template>
  <nav>
    <ul>
      <li>
        <router-link
          to="/about"
          title="Go to about page"
          aria-label="Go to about page"
        >
          About
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          title="Go to contact page"
          aria-label="Go to contact page"
        >
          Contact
        </router-link>
      </li>
    </ul>
    <hr>
    <h2>Click to Chat (Preview)</h2>
    <ul>
      <li
        v-for="chat in chats"
        :key="chat.label"
      >
        <router-link :to="chat.path">
          <span class="sr-only">See chat demo</span> {{ chat.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavList',
  setup () {
    const chats = [
      {
        label: 'Whatsapp',
        path: '/whatsapp'
      },
      {
        label: 'Telegram',
        path: '/telegram'
      },
      {
        label: 'Messeger',
        path: '/messeger'
      },
      {
        label: 'WeChat',
        path: '/wechat'
      },
      {
        label: 'Twitter',
        path: '/twitter'
      },
      {
        label: 'Viber',
        path: '/viber'
      },
      {
        label: 'Line chat',
        path: '/line'
      },
      {
        label: 'Email client',
        path: '/email'
      },
      {
        label: 'Mixed chats',
        path: '/mixed'
      },
      {
        label: 'Custom',
        path: '/custom'
      },
      {
        label: 'Right to left',
        path: '/rtl'
      }
    ]

    return { chats }
  }
})
</script>

<style lang="stylus">
.sr-only
  position absolute
  width 1px
  height 1px
  padding 0
  margin -1px
  overflow hidden
  clip rect(0, 0, 0, 0)
  white-space nowrap
  border-width 0

nav a
  display flex
  padding 1rem
  border-radius 10px
  transition .3s all
  user-select none
  &:hover
    transform translateY(-5px)
    text-decoration none
    background #eee
  &:active
    transform translateY(0)
  &.is-active
    background #227952
    color #fff
    pointer-events none
</style>

<template>
  <nav>
    <h2>Click to chat (Demos))</h2>
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
export default {
  name: 'NavList',
  data: () => ({
    chats: [
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
  })
}
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>

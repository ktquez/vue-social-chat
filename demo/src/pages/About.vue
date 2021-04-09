<template>
  <h2>About</h2>
  <p><b>vue-social-chat</b> allows your customers to open a conversation from your website directly to chat apps like WhatsApp, Telegram, Messenger, WeChat, Line, Viber or even the same custom form.</p>
  <p>Most people use a chat app, so offering your customer a form of direct contact helps you cover visitors to customers, as well as providing you with leads to increase your sales or spread your content.</p>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'About',
  setup () {
    onMounted(() => {
      document.title = 'About - Vue Social Chat'
    })
  }
})
</script>

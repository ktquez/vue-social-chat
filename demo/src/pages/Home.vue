<template>
  <h2>Welcome</h2>
  <p>Vue.js component for your visitors and customers to send messages directly to you through social chats or customized form.</p>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    onMounted(() => {
      document.title = 'VueSocialChat for Vue 2 &amp; Vue 3'
    })
  }
})
</script>

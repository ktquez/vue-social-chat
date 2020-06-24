# Custom

```vue
<template>
  <div class="layout">
    <!-- ommited -->
    <SocialChat>
      <p slot="header">Subscribe to our newsletter and know everything about anything</p>
      <template v-slot:body>
        <form
          name="newsletter"
          v-show="!subscribed"
          class="newsletter"
          @submit.prevent="send"
        >
          <label for="name">
            <span>Type your name</span>
            <input
              v-model="newsletter.name"
              name="name"
              type="text"
            >
          </label>
          <label for="email">
            <span>Type your email</span>
            <input
              v-model="newsletter.email"
              name="email"
              type="email"
            >
          </label>
          <button
            type="submit"
            aria-label="Confirm subscribe"
          >
            SUBSCRIBE
          </button>
        </form>
        <strong v-show="subscribed">Successfully subscribed</strong>
      </template>
      <template v-slot:button>
        <MyEmailIcon />
      </template>
    </SocialChat>
  </div>
</template>

<script>
import { SocialChat } from 'vue-social-chat'

export default {
  name: 'CustomPage',

  components: {
    SocialChat
  },

  data: () => ({
    newsletter: {
      name: '',
      email: ''
    },
    subscribed: false
  }),

  methods: {
    send () {
      // send data
    }
  }
}
</script>
```

<SocialChat icon>
  <p slot="header">Subscribe to our newsletter and know everything about anything</p>
  <template v-slot:body>
    <form
      name="newsletter"
      class="newsletter"
    >
      <label for="name">
        <span>Type your name</span>
        <input
          name="name"
          type="text"
        >
      </label>
      <label for="email">
        <span>Type your email</span>
        <input
          name="email"
          type="email"
        >
      </label>
      <button
        type="button"
        aria-label="Confirm subscribe"
      >
        SUBSCRIBE
      </button>
    </form>
  </template>
  <template v-slot:button>
    <img
      src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/email.svg"
      alt="icon email"
      aria-hidden="true"
    >
  </template>
</SocialChat>
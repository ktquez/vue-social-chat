# Setup for Vue 2

## Installation

```bash
$ npm install -S vue-social-chat
# or
$ yarn add vue-social-chat
```

## Usage

```js
import Vue from 'vue'
import VueSocialChat from 'vue-social-chat'

Vue.use(VueSocialChat)
```

Or import component locally

```vue
<script>
import { SocialChat } from 'vue-social-chat'

export default {
  // ...
  components: {
    SocialChat
  }
  // ...
}
</script>
```

Using the component in the template, por exemplo 

```vue {5,7,12}
<template>
  <div class='layout'>
    <!-- ommited -->
    <SocialChat
      icon
      :attendants="attendants"
    >
      <p slot="header">Click on one of our attendants below to chat on WhatsApp.</p>
      <template v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >      
      </template>
      <small slot="footer">Opening hours: 8am to 6pm</small>
    </SocialChat>
  </div>
</template>

<script>
// ...
export default {
  // ...
  data: () => ({
    attendants: [
      {
        app: 'whatsapp',
        label: 'Technical support',
        name: 'Alan Ktquez',
        number: '5581983383532',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Alan Ktquez avatar'
        }
      },
      // ...
    ]
  })
}
</script>
```

## Custom style

`vue-social-chat` uses CSS variables, so you can customize it with the colors you want.

```css
--vsc-bg-header: $bg;
--vsc-bg-footer: #fafafa;
--vsc-text-color-header: white;
--vsc-text-color-footer: inherit;
--vsc-bg-button: $bgButton;
--vsc-text-color-button: white;
--vsc-outline-color: #333;
--vsc-border-color-bottom-header: transparent;
--vsc-border-color-top-footer: #f3f3f3;
```

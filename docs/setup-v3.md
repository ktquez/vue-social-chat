# Setup for Vue 3

## Installation

```bash
$ npm install -S vue-social-chat@next
# or
$ yarn add vue-social-chat@next
```

## Usage

Globally:

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueSocialChat from 'vue-social-chat'

createApp(App)
  .use(VueSocialChat)
  .mount('#app')
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
      <template #header>
        <p>Click on one of our attendants below to chat on WhatsApp.</p>
      </template>
      <template #button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >      
      </template>
      <template #footer>
        <small>Opening hours: 8am to 6pm</small>
      </template>
    </SocialChat>
  </div>
</template>

<script>
export default {
  name: 'MyNameComponent',

  setup () {
    const attendants = [
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

    return { attendants }
  }
}
</script>
```

## Custom style

`vue-social-chat` uses CSS variables, so you can customize it with the colors you want.

```css
--vsc-bg-header
--vsc-bg-footer
--vsc-text-color-header
--vsc-text-color-footer
--vsc-bg-button
--vsc-text-color-button
--vsc-outline-color
--vsc-border-color-bottom-header
--vsc-border-color-top-footer
```

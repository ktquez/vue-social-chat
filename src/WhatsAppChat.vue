<template>
  <PopupChat
    class="vue-whatsapp-support"
    :icon="icon"
  >
    <template v-slot:header>
      <slot name="header" />
    </template>
    <template v-slot:body>
      <ListChat :attendants="attendants" />
    </template>
    <template v-slot:icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
      >
        <path d="M24.02 3.98A13.49 13.49 0 0014.42 0 13.58 13.58 0 002.35 19.8L.07 26.34A1.26 1.26 0 001.25 28a1.27 1.27 0 00.42-.07l6.52-2.28A13.58 13.58 0 0024.02 3.98zm-1.16 18.04a11.94 11.94 0 01-14.04 2.1 1.26 1.26 0 00-1.01-.08l-5.92 2.07 2.07-5.92a1.26 1.26 0 00-.08-1A11.94 11.94 0 0114.42 1.63a11.94 11.94 0 018.44 20.38zm0 0" />
        <path d="M19.47 14.8a1.6 1.6 0 00-2.27 0l-.68.67a9.94 9.94 0 01-4-3.99l.69-.68a1.6 1.6 0 000-2.27L11.37 6.7a1.6 1.6 0 00-2.27 0L7.63 8.16c-.85.85-.89 2.3-.12 4.09a17.93 17.93 0 008.24 8.24 5.95 5.95 0 002.3.55 2.44 2.44 0 001.78-.67l1.48-1.47a1.6 1.6 0 000-2.27zm-.8 4.4c-.24.25-.98.33-2.27-.22a16.33 16.33 0 01-7.38-7.38c-.55-1.3-.47-2.03-.23-2.28l1.45-1.44 1.78 1.78-.86.86a1.25 1.25 0 00-.23 1.46 11.59 11.59 0 005.1 5.09 1.25 1.25 0 001.45-.24l.86-.85 1.78 1.78zm0 0" />
      </svg>
    </template>
    <template v-slot:footer>
      <slot name="footer" />
    </template>
  </PopupChat>
</template>

<script>
import ListChat from './ListChat.vue'
import PopupChat from './PopupChat.vue'

export default {
  name: 'WhatsAppChat',

  components: {
    ListChat,
    PopupChat
  },

  props: {
    icon: {
      type: Boolean,
      default: true
    },
    attendants: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="stylus">
$waColor = #0dc152

.vue-whatsapp-support .vsc-popup
  --vsc-bg-header: darken($waColor, 10%)
  --vsc-bg-button: $waColor
  --vsc-bg-hover-button: darken($waColor, 20%)
  --vsc-outline-color: #333
  --vsc-text-color-header: white;

  .vsc-popup-header a
    color: var(--vsc-text-color-header)

</style>

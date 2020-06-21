<template>
  <FocusLock :disabled="!show">
    <div
      ref="vscPopup"
      class="vsc-popup"
      :class="classNameApp"
    >
      <div
        id="vsc-popup-box"
        class="vsc-popup-box"
        :class="{
          'vsc-popup-box--show': show
        }"
      >
        <div
          v-show="$slots.header"
          class="vsc-popup-header"
        >
          <slot name="header" />
        </div>
        <div class="vsc-popup-body">
          <slot name="body">
            <ListChat :attendants="attendants" />
          </slot>
        </div>
        <div
          v-show="$slots.footer"
          class="vsc-popup-footer"
        >
          <slot name="footer" />
        </div>
      </div>
      <div>
        <button
          class="vsc-popup-button vsc-popup-button--default"
          :class="{
            'vsc-popup-button--no-icon': !icon
          }"
          aria-haspopup="true"
          aria-controls="vsc-popup-box"
          aria-expanded="false"
          :aria-label="ariaLabelButton"
          :title="ariaLabelButton"
          @click="togglePopup"
        >
          <slot
            v-if="!show || !icon"
            name="icon"
          >
            <chatIcon />
          </slot>
          <closeIcon v-show="show && icon" />
        </button>
      </div>
    </div>
  </FocusLock>
</template>

<script>
import chatIcon from './icons/chat.svg'
import closeIcon from './icons/close.svg'
import ListChat from './ListChat.vue'
import FocusLock from 'vue-focus-lock'

export default {
  name: 'VueSocialChat',

  components: {
    chatIcon,
    ListChat,
    closeIcon,
    FocusLock
  },

  props: {
    app: {
      type: String,
      default: null
    },
    icon: {
      type: Boolean,
      default: true
    },
    attendants: {
      type: Array,
      default: () => ([])
    }
  },

  data: () => ({
    show: false
  }),

  computed: {
    classNameApp () {
      return `vsc-${this.app || 'default'}`
    },

    ariaLabelButton () {
      return `${this.show ? 'Close' : 'Open'} social support widget`
    }
  },

  methods: {
    togglePopup () {
      this.show = !this.show
      if (!this.show) return
      this.focusFirstLink()
    },

    focusFirstLink () {
      const link = this.$refs.vscPopup.querySelector('a')
      if (link) setTimeout(() => link.focus(), 200)
    }
  }
}
</script>

<style lang="stylus">
$bg = #333
$bgButton = #333
$waColor = #46c056

:root
  --vsc-bg-header: $bg
  --vsc-bg-footer: #fafafa
  --vsc-text-color-header: white
  --vsc-text-color-footer: inherit
  --vsc-bg-button: $bgButton
  --vsc-text-color-button: white
  --vsc-outline-color: #333
  --vsc-border-default: 1px solid #f3f3f3

.vsc-whatsapp.vsc-popup
  --vsc-bg-button: $waColor

.vsc-popup *
  box-sizing: border-box
  padding: 0
  margin: 0

.vsc-popup
  position: fixed
  right: 20px
  bottom: 20px
  display: flex
  flex-wrap: wrap
  justify-content: flex-end
  max-width: 380px
  -webkit-font-smoothing: antialiased

  &-box
    transition: transform .3s ease-in-out, opacity .2s, visibility .2s
    transform-origin: bottom right
    transform: scale3d(0,0,0)
    opacity: 0
    visibility: hidden
    border-radius: 10px
    margin-bottom: 10px
    box-shadow: 0 5px 25px -5px rgba(45,62,79,0.15)
    background-color: #fbfbfb
    border: var(--vsc-border-default)
    overflow: hidden

    &--show
      transform: scale3d(1,1,1)
      visibility: visible
      opacity: 1

  &-header
    text-align: left
    padding: 22px 30px
    border-bottom: var(--vsc-border-default)
    background-color: var(--vsc-bg-header)
    color: var(--vsc-text-color-header)

  &-body
    padding: 14px
    background-color: white
    max-height: 300px
    overflow: auto

    &__list
      list-style: none
      display: flex
      flex-wrap: wrap

      &-item
        width: 100%

        &:not(:last-child)
          border-bottom: 1px solid #fbfbfb

    &__link
      outline: none;
      display: flex
      padding: 10px 14px
      text-decoration: none
      color: #333
      letter-spacing: .2px
      margin: 1.5px 0
      border-radius: 10px

      &:hover, &:focus
        background-color: #fbfbfb

      &:focus
        box-shadow: 0 0 0 3px var(--vsc-outline-color)

      &-avatar
        position: relative
        width: 62px
        height: 62px

        > img
          width: 100%
          height: 100%
          object-fit: cover
          border-radius: 50%

        &-brand
          position: absolute;
          right: 2px;
          bottom: 2px;
          width: 15px;
          height: 15px;
          background-repeat: no-repeat;
          background-size: contain;

      &-info
        padding-top: 12px
        padding-left: 12px

        > span
          display: block
          text-align: left

        &__label
          font-size: 12px

        &__name
          font-weight: bold
          margin-top: 2px

  &-footer
    text-align: center
    padding: 16px
    border-top: var(--vsc-border-default)
    background-color: var(--vsc-bg-footer)
    color: var(--vsc-text-color-footer)

  &-button
    outline: none
    appearance: none
    -webkit-appearance: none
    -moz-appearance: none
    background-color: transparent
    color: var(--vsc-text-color-button)
    border: none
    cursor: pointer
    border-radius: 50%
    width: 60px
    height: 60px
    display: inline-block
    padding-top: 2px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.3)
    font-family: inherit
    transition: background-color .3s, box-shadow .2s

    &--default
      background-color: var(--vsc-bg-button)

    &--no-icon
      border-radius: 30px
      height: auto
      width: auto
      padding: 14px 20px

    &:focus, &:hover
      box-shadow: 0 0 0 3px white, 0 0 0 6px var(--vsc-outline-color)

@media (prefers-reduced-motion) {
  .vsc-popup * {
    transition: none;
  }
}
</style>

<template>
  <FocusLock :disabled="!show">
    <div class="vsc-popup">
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
          <slot name="body" />
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
          @click="togglePopup"
        >
          <span v-show="!show">
            <slot name="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
              >
                <defs />
                <path d="M28 13.43A13.75 13.75 0 0014 0 13.75 13.75 0 000 13.43v.03a13.21 13.21 0 004.4 9.77v3.38A1.37 1.37 0 005.76 28a1.36 1.36 0 00.72-.21l2.72-1.7a14.37 14.37 0 004.76.8H14.26A13.75 13.75 0 0028 13.48v-.04zm-5.37 8.47a12.03 12.03 0 01-8.61 3.36H14a12.73 12.73 0 01-4.42-.78 1.2 1.2 0 00-1.06.1l-2.48 1.56v-3.11a1.2 1.2 0 00-.42-.9 11.57 11.57 0 01-3.98-8.67A12.1 12.1 0 0113.98 1.64h.04a12.1 12.1 0 0112.34 11.81 12.03 12.03 0 01-3.73 8.45zm0 0" />
                <path d="M20.02 9.53H7.98a.82.82 0 000 1.64h12.04a.82.82 0 100-1.64zm0 0M20.02 13.16H7.98a.82.82 0 000 1.65h12.04a.82.82 0 100-1.65zm0 0M20.02 16.8H14.1a.82.82 0 000 1.64h5.92a.82.82 0 100-1.65zm0 0" />
              </svg>
            </slot>
          </span>
          <svg
            v-show="show"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <defs />
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </FocusLock>
</template>

<script>
import FocusLock from 'vue-focus-lock'

export default {
  name: 'VuePopupChat',

  components: {
    FocusLock
  },

  props: {
    icon: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    show: false
  }),

  computed: {
    ariaLabelButton () {
      return `${this.show ? 'Close' : 'Open'} social support widget`
    }
  },

  methods: {
    togglePopup () {
      this.show = !this.show
    }
  }
}
</script>

<style src="./styles/variables.css"></style>
<style lang="stylus">
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
    padding: 16px
    background-color: white

    &__list
      list-style: none
      display: flex
      flex-wrap: wrap

      &-item
        width: 100%

    &__link
      display: flex
      padding: 20px
      text-decoration: none
      border-radius: 10px
      color: #333
      letter-spacing: .2px

      &:hover, &:focus
        background-color: #fbfbfb

      &-avatar
        width: 62px
        height: 62px
        overflow: hidden

        > img
          width: 100%
          height: 100%
          object-fit: cover
          border-radius: 50%

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
    color: inherit
    border: none
    cursor: pointer
    border-radius: 50%
    width: 60px
    height: 60px
    display: inline-block
    box-shadow: 0 3px 10px rgba(0,0,0,0.3)
    font-family: inherit
    transition: background-color .3s

    &--default
      background-color: var(--vsc-bg-button)
      color: var(--vsc-text-color-button)

    &--no-icon
      border-radius: 30px
      height: auto
      width: auto
      padding: 14px 20px

    &:hover
      background-color: var(--vsc-bg-hover-button)

    &:focus
      box-shadow: 0 0 0 3px var(--vsc-outline-color)

@media (prefers-reduced-motion) {
  .vsc-popup * {
    transition: none;
  }
}
</style>

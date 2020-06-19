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
          <slot name="body">
            <ul class="vsc-popup-body__list">
              <li
                v-for="(support, index) in team"
                :key="`vsc-item-${index}`"
                class="vsc-popup-body__list-item"
              >
                <a
                  :href="support.href"
                  rel="noopener"
                  target="_blank"
                  class="vsc-popup-body__link"
                  :aria-label="`Contact ${support.name}, opens in a new window`"
                >
                  <div class="vsc-popup-body__link-avatar">
                    <img
                      :src="support.avatar.src"
                      :alt="support.avatar.alt"
                    >
                  </div>
                  <div class="vsc-popup-body__link-info">
                    <span
                      class="vsc-popup-body__link-info__label"
                      v-text="support.label"
                    />
                    <span
                      class="vsc-popup-body__link-info__name"
                      v-text="support.name"
                    />
                  </div>
                </a>
              </li>
            </ul>
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
          @click="togglePopup"
        >
          <span v-show="!show">
            <slot name="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 511.3 511.3"
              >
                <defs />
                <path d="M362.3 165.3H149a21 21 0 100 42h213.3a21 21 0 100-42zM309 250.7H149a21 21 0 100 42h160a21 21 0 100-42z" />
                <path d="M488.6 61.3a21 21 0 00-12.2-12C397 19.4 115.3 19 35 49.4a21 21 0 00-12.1 12C21.8 63.7 0 120.8 0 229s21.9 165.3 22.8 167.6a21 21 0 0012.1 12c1.8.7 44 16.3 151.8 21.2l55 49.5a21 21 0 0028 0l55-49.5c107.7-4.9 150-20.5 151.7-21.2a21 21 0 0012.2-12c.9-2.3 22.7-59.4 22.7-167.6S489.5 63.7 488.6 61.3zM452.4 372c-17.2 4.4-59.8 13.1-137 16.2a21 21 0 00-13.2 5.4l-46.5 41.8-46.5-41.8a21 21 0 00-13.3-5.4C118.7 385 76.2 376.4 59 372c-22.6-78-22.5-208.4 0-286 90.7-23.2 303-23.2 393.5 0 22.6 77.7 22.6 208 0 286z" />
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
    },
    team: {
      type: Array,
      default: () => ([])
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

.vsc-popup-header, .vsc-popup-footer
  background-color: var(--vsc-bg-header)
  color: var(--vsc-text-color-header)

@media (prefers-reduced-motion) {
  .vsc-popup * {
    transition: none;
  }
}
</style>

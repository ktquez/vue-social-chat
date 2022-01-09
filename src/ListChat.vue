<template functional>
  <ul class="vsc-popup-body__list">
    <li
      v-for="(attendant, index) in props.attendants"
      :key="`vsc-item-${index}`"
      class="vsc-popup-body__list-item"
    >
      <a
        :href="attendant.href"
        rel="noopener noreferer"
        target="_blank"
        class="vsc-popup-body__link"
        :aria-label="`Contact ${attendant.name}, opens in a new window`"
      >
        <div class="vsc-popup-body__link-avatar">
          <img
            :src="attendant.avatar.src"
            :alt="attendant.avatar.alt"
          >
          <span
            class="vsc-popup-body__link-avatar-brand"
            :style="attendant.app ? `background-image: url(${props.urlAssets}/${attendant.app}.png)` : ''"
          />
        </div>
        <div class="vsc-popup-body__link-info">
          <span
            class="vsc-popup-body__link-info__label"
            v-text="attendant.label"
          />
          <span
            class="vsc-popup-body__link-info__name"
            v-text="attendant.name"
          />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { URL_ASSETS_LOGOS } from './constants'

export default {
  name: 'ListChat',

  props: {
    urlAssets: {
      type: String,
      default: URL_ASSETS_LOGOS
    },
    attendants: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

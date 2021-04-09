<template>
  <h2>Contact</h2>
  <ul class="contact">
    <li>
      <h3>Alan Ktquez</h3>
      <img src="https://avatars.githubusercontent.com/u/8084606?v=4" alt="Lucas Lima" />
      <a target="_blank" href="https://github.com/ktquez">Github</a>
      <a target="_blank" href="https://twitter.com/ktquez">Twitter</a>
      <a target="_blank" href="https://t.me/ktquez">Telegram</a>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5581983383532&text=Hello">WhatsApp +55 81 98338 3532</a>
      <a target="_blank" href="mailto:ktquez@gmail.com?subject=Contact from Vue Social Chat">E-mail: ktquez@gmail.com</a>
    </li>
    <li>
      <h3>Lucas Lima</h3>
      <img src="https://avatars.githubusercontent.com/u/40927839?v=4" alt="Lucas Lima" />
      <a target="_blank" href="https://github.com/lucasferreiralimax">Github</a>
      <a target="_blank" href="https://twitter.com/ferreiralimax">Twitter</a>
      <a target="_blank" href="https://t.me/lucasferreiralimax">Telegram</a>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5583996749477&text=Hello">WhatsApp +55 83 99674 9477</a>
      <a target="_blank" href="mailto:lucasferreiralimax@gmail.com?subject=Contact from Vue Social Chat">E-mail: lucasferreiralimax@gmail.com</a>
    </li>
  </ul>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Contact',
  setup () {
    onMounted(() => {
      document.title = 'Contact - Vue Social Chat'
    })
  }
})
</script>

<style lang="stylus">
.contact
  img
    width 200px
    border-radius 100%
    box-shadow 0 0 0 5px #fff, 0 0 0 10px #227952
  a
    border-radius 6px
    padding 1rem
    margin 1rem
    display flex
    justify-content center
    background #eee
    text-decoration none
    transition .3s all
    &:hover
      text-decoration none
      background #227952
      color #fff
</style>

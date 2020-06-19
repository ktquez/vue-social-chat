<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <PopupChat :team="team">
      <template v-slot:header>
        <h3>Hello!</h3>
        <p>Click one of our representatives below to chat on WhatsApp or send us an email to <a href="mailto:hello@quadlayers.com">hello@quadlayers.com</a></p>
      </template>
      <template v-slot:footer>
        <a href="mailto:hello@quadlayers.com">hello@quadlayers.com</a>
      </template>
    </PopupChat>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    team: [
      {
        label: 'Support',
        name: 'Alan Albuquerque',
        href: 'https://web.whatsapp.com/send?phone=5581983383532&text=',
        avatar: {
          src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
          alt: 'Avatar Support Alan Albuquerque'
        }
      },
      {
        label: 'Support TI',
        name: 'Rodrigo Pombo',
        href: 'https://web.whatsapp.com/send?phone=5581983383532&text=',
        avatar: {
          src: 'https://avatars3.githubusercontent.com/u/1911623?s=460&u=e229be53a0816de373a668ad8f74e20b30c056c8&v=4',
          alt: 'Avatar Support Rodrigo Pombo'
        }
      },
      {
        label: 'Human Resources',
        name: 'April Gonçalves',
        href: 'https://web.whatsapp.com/send?phone=5581983383532&text=',
        avatar: {
          src: 'https://avatars3.githubusercontent.com/u/609862?s=400&u=e58f7e1a6a5e5ce21979a183db43870582ffcde4&v=4',
          alt: 'Avatar Support April Gonçalves'
        }
      }
    ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #41b883;
}
</style>

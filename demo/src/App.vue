<template>
  <div id="app">
    <h1>Vue social chat</h1>
    <nav-list />
    <router-view />
  </div>
</template>

<script>
import NavList from './components/NavList'

export default {
  name: 'App',
  components: {
    'nav-list': NavList
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

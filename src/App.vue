<template>
  <Header />
  <AlpacaBuilder />
</template>

<script>
import Header from './components/Header.vue'
import AlpacaBuilder from './components/AlpacaBuilder.vue'

export default {
  name: 'App',
  components: {
    Header,
    AlpacaBuilder,
  }
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
</style>

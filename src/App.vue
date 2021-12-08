<template>
  <Header />
  <AlpacaBuilder />
  <Actions />
</template>

<script>
import Header from './components/Header.vue'
import AlpacaBuilder from './components/AlpacaBuilder.vue'
import Actions from './components/Actions.vue'

export default {
  name: 'App',
  components: {
    Header,
    AlpacaBuilder,
    Actions,
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

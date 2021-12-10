<template>
  <Header />
  <AlpacaBuilder />
</template>

<script>
import Header from "./components/Header.vue";
import AlpacaBuilder from "./components/AlpacaBuilder.vue";

export default {
  name: "App",
  components: {
    Header,
    AlpacaBuilder,
  },
};
</script>

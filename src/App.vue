<template>
  <HeaderTitle />
  <AlpacaBuilder />
</template>

<script>
import HeaderTitle from "./components/HeaderTitle.vue";
import AlpacaBuilder from "./components/AlpacaBuilder.vue";

export default {
  name: "App",
  components: {
    HeaderTitle,
    AlpacaBuilder,
  },
};
</script>

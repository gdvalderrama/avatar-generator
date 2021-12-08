<template>
  <div>
    <button v-on:click="randomize">Randomize</button>
    <button v-on:click="download">Download</button>
  </div>
</template>

<script>
export default {
  name: 'Actions',
  methods: {
    randomize: function () {
      console.log('TODO randomize')
    },
    download: function () {
      console.log('TODO download')
    }
  }
}
</script>

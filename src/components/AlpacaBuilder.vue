<template>

  <div class="image-preview" v-for="(value, choice) in alpaca" :key="choice">
    <img class="{{ choice }}" :src="require('../assets/alpaca/' + choice + '/' + value + '.png')">
  </div>

  <div>

    <h2>Element</h2>
    <div v-for="(value, choice) in alpaca" :key="choice">
      <button v-on:click="showStyles(choice)">{{ choice }}</button>
    </div>

    <h2>Style</h2>
    <div v-for="style in selectedChoice" :key="style">
      <button v-on:click="setStyle(style)">{{ style }}</button>
    </div>

  </div>

</template>

<script>
export default {
  name: 'AlpacaBuilder',

  data () {
    var Alpaca = {
        'backgrounds': 'blue50',
        'ears': 'default',
        'leg': 'default',
        'neck': 'default',
        'hair': 'default',
        'eyes': 'default',
        'nose': 'default',
        'mouth': 'default',
        'accessories': 'default',
    }

    const backgrounds = ['blue50', 'blue60', 'blue70', 'darkblue30', 'darkblue50', 'darkblue70', 'green50', 'green60', 'green70', 'grey40', 'grey70', 'grey80', 'red50', 'red60', 'red70', 'yellow50', 'yellow60', 'yellow70']
    const ears = ['default', 'tilt-backward', 'tilt-forward']
    const leg = ['bubble-tea', 'cookie', 'default', 'game-console', 'tilt-backward', 'tilt-forward']
    const neck = ['bend-backward', 'bend-forward', 'default', 'thick']
    const hair = ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short']
    const eyes = ['angry', 'default', 'naughty', 'panda', 'smart', 'star']
    const nose = ['default']
    const mouth = ['astonished', 'default', 'eating', 'laugh', 'tongue']
    const accessories = ['default', 'earings', 'flower', 'glasses', 'headphone']

    var selectedChoice = backgrounds
    var selectedChoiceName = 'backgrounds'

    return {
      alpaca: Alpaca,
      selectedChoice: selectedChoice,
      selectedChoiceName: selectedChoiceName,
      backgrounds: backgrounds,
      ears: ears,
      leg: leg,
      neck: neck,
      hair: hair,
      eyes: eyes,
      nose: nose,
      mouth: mouth,
      accessories: accessories,
    }
  },
  methods: {
    showStyles: function (choice) {
      this.selectedChoice = this[choice]
      this.selectedChoiceName = choice
    },
    setStyle: function (style) {
      this.alpaca[this.selectedChoiceName] = style
    },
  }
}
</script>

<style scoped>
.image-preview {
  position: relative;
  top: 0;
  left: 0;
}
.image-preview img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

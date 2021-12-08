<template>

  <div class="image-preview" v-for="(value, choice) in alpaca" :key="choice">
    <img class="{{ choice }}" :src="require('../assets/alpaca/' + choice + '/' + value + '.png')">
  </div>

  <div>

    <h2>Element</h2>
    <div v-for="(value, choice) in configuration" :key="choice">
      <button v-on:click="showStyles(choice)">{{ choice }}</button>
    </div>

    <h2>Style</h2>
    <div v-for="style in configuration[selectedChoiceName]" :key="style">
      <button v-on:click="setStyle(style)">{{ style }}</button>
    </div>

  </div>

  <div>
    <button v-on:click="randomize">Randomize</button>
    <button v-on:click="download">Download</button>
  </div>

</template>

<script>
import mergeImages from 'merge-images';

export default {
  name: 'AlpacaBuilder',

  data () {

    const backgrounds = ['blue50', 'blue60', 'blue70', 'darkblue30', 'darkblue50', 'darkblue70', 'green50', 'green60', 'green70', 'grey40', 'grey70', 'grey80', 'red50', 'red60', 'red70', 'yellow50', 'yellow60', 'yellow70']
    const ears = ['default', 'tilt-backward', 'tilt-forward']
    const leg = ['bubble-tea', 'cookie', 'default', 'game-console', 'tilt-backward', 'tilt-forward']
    const neck = ['bend-backward', 'bend-forward', 'default', 'thick']
    const hair = ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short']
    const eyes = ['angry', 'default', 'naughty', 'panda', 'smart', 'star']
    const nose = ['default']
    const mouth = ['astonished', 'default', 'eating', 'laugh', 'tongue']
    const accessories = ['default', 'earings', 'flower', 'glasses', 'headphone']

    const Configuration = {
        'backgrounds': backgrounds,
        'ears': ears,
        'leg': leg,
        'neck': neck,
        'hair': hair,
        'nose': nose,
        'eyes': eyes,
        'mouth':mouth,
        'accessories': accessories,
    }

    var Alpaca = {
        'backgrounds': 'blue50',
        'ears': 'default',
        'leg': 'default',
        'neck': 'default',
        'hair': 'default',
        'nose': 'default',
        'eyes': 'default',
        'mouth': 'default',
        'accessories': 'default',
    }

    var selectedChoiceName = 'backgrounds'

    return {
      configuration: Configuration,
      alpaca: Alpaca,
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
      this.selectedChoiceName = choice
    },
    setStyle: function (style) {
      this.alpaca[this.selectedChoiceName] = style
    },
    randomize: function () {
      for (const key in this.configuration) {
        this.selectedChoiceName = key
        this.setStyle(this.configuration[key][Math.floor(Math.random() * this.configuration[key].length)])
      }
    },
    download: function () {
      var images = document.images
      var image_urls = []
      for (var i = 0; i < images.length; i++) {
        image_urls.push(images[i].src)
      }
      mergeImages(image_urls).then((b64) => {
        var a = document.createElement("a");
        a.href = b64;
        a.download = "Alpaca.png";
        a.click();
      });
    }
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

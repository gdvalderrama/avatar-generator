<template>
  <div>
    <button v-on:click="randomize">Randomize</button>
    <button v-on:click="download">Download</button>
  </div>
</template>

<script>
import mergeImages from 'merge-images';

export default {
  name: 'Actions',
  methods: {
    randomize: function () {
      console.log('TODO randomize')
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

<template>
  <div class="row text-center q-pa-md">
    <div class="col-sm-12 col-md-6">
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          icon="shuffle"
          @click="randomize"
          label="Randomize"
          color="secondary"
        />
        <q-btn
          icon="download"
          @click="download"
          label="Download"
          color="secondary"
        />
      </div>

      <div class="relative-position">
        <img
          class="absolute"
          style="left: 0"
          height="500"
          width="500"
          v-for="(value, choice) in alpaca"
          :key="choice"
          :src="require('../assets/alpaca/' + choice + '/' + value + '.png')"
        />
      </div>
    </div>

    <div class="col-sm-12 col-md-6">
      <h3>Element</h3>
      <span
        v-for="(value, choice) in configuration"
        :key="choice"
        class="q-pa-xs q-gutter-xs"
      >
        <q-btn
          v-if="choice == this.selectedChoiceName"
          @click="showStyles(choice)"
          :label="choice"
          color="primary : secondary"
        />
        <q-btn v-else @click="showStyles(choice)" :label="choice" />
      </span>

      <h3>Style</h3>
      <span
        v-for="style in configuration[selectedChoiceName]"
        :key="style"
        class="q-pa-xs q-gutter-xs"
      >
        <q-btn
          v-if="this.alpaca[this.selectedChoiceName] == style"
          @click="setStyle(style)"
          :label="style"
          color="primary"
        />
        <q-btn v-else @click="setStyle(style)" :label="style" />
      </span>
    </div>
  </div>
</template>

<script>
import mergeImages from "merge-images";

export default {
  name: "AlpacaBuilder",

  data() {
    const backgrounds = [
      "blue50",
      "blue60",
      "blue70",
      "darkblue30",
      "darkblue50",
      "darkblue70",
      "green50",
      "green60",
      "green70",
      "grey40",
      "grey70",
      "grey80",
      "red50",
      "red60",
      "red70",
      "yellow50",
      "yellow60",
      "yellow70",
    ];
    const ears = ["default", "tilt-backward", "tilt-forward"];
    const leg = [
      "bubble-tea",
      "cookie",
      "default",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ];
    const neck = ["bend-backward", "bend-forward", "default", "thick"];
    const hair = [
      "bang",
      "curls",
      "default",
      "elegant",
      "fancy",
      "quiff",
      "short",
    ];
    const eyes = ["angry", "default", "naughty", "panda", "smart", "star"];
    const nose = ["default"];
    const mouth = ["astonished", "default", "eating", "laugh", "tongue"];
    const accessories = [
      "default",
      "earings",
      "flower",
      "glasses",
      "headphone",
    ];

    const Configuration = {
      backgrounds: backgrounds,
      ears: ears,
      leg: leg,
      neck: neck,
      hair: hair,
      nose: nose,
      eyes: eyes,
      mouth: mouth,
      accessories: accessories,
    };

    var Alpaca = {
      backgrounds: "blue50",
      leg: "default",
      ears: "default",
      neck: "default",
      nose: "default",
      mouth: "default",
      hair: "default",
      eyes: "default",
      accessories: "default",
    };

    var selectedChoiceName = "backgrounds";

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
    };
  },
  methods: {
    showStyles: function (choice) {
      this.selectedChoiceName = choice;
    },
    setStyle: function (style) {
      this.alpaca[this.selectedChoiceName] = style;
    },
    randomize: function () {
      for (const key in this.configuration) {
        this.selectedChoiceName = key;
        this.setStyle(
          this.configuration[key][
            Math.floor(Math.random() * this.configuration[key].length)
          ]
        );
      }
    },
    download: function () {
      var images = document.images;
      var image_urls = [];
      for (var i = 0; i < images.length; i++) {
        image_urls.push(images[i].src);
      }
      mergeImages(image_urls).then((b64) => {
        var a = document.createElement("a");
        a.href = b64;
        a.download = "Alpaca.png";
        a.click();
      });
    },
  },
};
</script>

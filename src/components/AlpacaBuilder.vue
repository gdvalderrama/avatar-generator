<template>
  <div class="row text-center q-pa-md">
    <div class="col-12 col-md-6">
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          icon="shuffle"
          @click="randomize"
          label="Randomize"
          color="secondary"
          aria-label="Randomize alpaca"
        />
        <q-btn
          icon="download"
          @click="download"
          label="Download"
          color="secondary"
          aria-label="Download alpaca as image"
        />
      </div>

      <div class="alpaca-canvas relative-position">
        <img
          class="absolute alpaca-layer"
          style="left: 0; top: 0"
          v-for="(value, choice) in alpaca"
          :key="choice"
          :src="`${baseUrl}alpaca/${choice}/${value}.png`"
          :alt="`Alpaca ${choice}: ${value}`"
        />
      </div>
    </div>

    <div class="col-12 col-md-6 q-mt-md-none q-mt-xl">
      <h2 class="text-h6 q-mb-sm">Element</h2>
      <div role="group" aria-label="Select element">
        <q-btn
          v-for="(value, choice) in configuration"
          :key="choice"
          @click="showStyles(choice)"
          :label="choice"
          :color="choice === selectedChoiceName ? 'primary' : undefined"
          :aria-pressed="choice === selectedChoiceName"
          class="q-ma-xs"
        />
      </div>

      <h2 class="text-h6 q-mt-md q-mb-sm">Style</h2>
      <div role="group" :aria-label="`Select style for ${selectedChoiceName}`">
        <q-btn
          v-for="style in configuration[selectedChoiceName]"
          :key="style"
          @click="setStyle(style)"
          :label="style"
          :color="alpaca[selectedChoiceName] === style ? 'primary' : undefined"
          :aria-pressed="alpaca[selectedChoiceName] === style"
          class="q-ma-xs"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mergeImages from "merge-images";

export default {
  name: "AlpacaBuilder",

  data() {
    const backgrounds = [
      "blue50", "blue60", "blue70",
      "darkblue30", "darkblue50", "darkblue70",
      "green50", "green60", "green70",
      "grey40", "grey70", "grey80",
      "red50", "red60", "red70",
      "yellow50", "yellow60", "yellow70",
    ];
    const ears = ["default", "tilt-backward", "tilt-forward"];
    const leg = ["bubble-tea", "cookie", "default", "game-console", "tilt-backward", "tilt-forward"];
    const neck = ["bend-backward", "bend-forward", "default", "thick"];
    const hair = ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"];
    const eyes = ["angry", "default", "naughty", "panda", "smart", "star"];
    const nose = ["default"];
    const mouth = ["astonished", "default", "eating", "laugh", "tongue"];
    const accessories = ["default", "earings", "flower", "glasses", "headphone"];

    const configuration = {
      backgrounds, ears, leg, neck, hair, nose, eyes, mouth, accessories,
    };

    const alpaca = {
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

    return {
      baseUrl: import.meta.env.BASE_URL,
      configuration,
      alpaca,
      selectedChoiceName: "backgrounds",
    };
  },

  methods: {
    showStyles(choice) {
      this.selectedChoiceName = choice;
    },
    setStyle(style) {
      this.alpaca[this.selectedChoiceName] = style;
    },
    randomize() {
      for (const key in this.configuration) {
        this.alpaca[key] = this.configuration[key][
          Math.floor(Math.random() * this.configuration[key].length)
        ];
      }
    },
    download() {
      const imageLayers = Object.entries(this.alpaca).map(
        ([choice, value]) => `${this.baseUrl}alpaca/${choice}/${value}.png`
      );
      mergeImages(imageLayers).then((b64) => {
        const a = document.createElement("a");
        a.href = b64;
        a.download = "Alpaca.png";
        a.click();
      });
    },
  },
};
</script>

<style scoped>
.alpaca-canvas {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  margin: 0 auto;
}

.alpaca-layer {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

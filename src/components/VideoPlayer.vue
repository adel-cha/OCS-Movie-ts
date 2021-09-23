<template>
  <div ref="videoContainer" class="shadow-lg mx-auto max-w-full size">
    <video
      id="video"
      ref="videoPlayer"
      class="w-full h-full"
      :poster="posterUrl"
    ></video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface ShakaError {
    severity:number,
    category:number,
    code: number
}
export default defineComponent({
    props: {
    manifestUrl: {
      type: String,
      required: true
    },
    licenseServer: {
      type: String,
      required: true
    },
    posterUrl: {
      type: String,
      required: false,
      default: ''
    }
  },
   mounted() {
  const shaka = require('shaka-player/dist/shaka-player.ui.js');
    const player = new shaka.Player(this.$refs.videoPlayer);
    const ui = new shaka.ui.Overlay(
      player,
      this.$refs.videoContainer,
      this.$refs.videoPlayer
    );
    ui.getControls();
    player.configure({
      drm: {
        servers: { 'com.widevine.alpha': this.licenseServer }
      }
    });
    player
      .load(this.manifestUrl)
      .then(() => {
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
  },
  methods: {
    onError(error:ShakaError) {
      console.error('Error code', error.code, 'object', error);
    }
  }
})
</script>

<style>
@import '../../node_modules/shaka-player/dist/controls.css'; /* Shaka player CSS import */
.size {
  width: 800px;
}
</style>
<template>
  <div class="frame frame-19">
    <div class="frame-19__trigger-sticky"
      ref="triggerSticky"></div>

    <AutoVideo class="frame-19__video"
      ref="video"
      :src="require('../assets/media/story3/index_part3_background_video1_m.mp4')"
      :src-large="require('../assets/media/story3/index_part3_background_video1_pc.mp4')"
      :freeze="isBlur"
      :ctrl="ctrl">
    </AutoVideo>

    <!-- <AutoVideo class="frame-19__video"
      ref="video"
      :src="require('../assets/media/story3/index_part3_background_video1_m.mp4')"
      :blur="isBlur"
      :freeze="isBlur">
    </AutoVideo> -->
  </div>
</template>

<script>
import AutoVideo from './AutoVideo'

export default {
  name: 'Frame19',
  components: {
    AutoVideo
  },
  props: {
    ctrl: {
      type: Object
    },
  },
  data () {
    return {
      isBlur: false
    }
  },
  mounted () {
    let height =  window.innerHeight
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerSticky,
      duration: height*5,
      triggerHook:'onLeave',
    })
    .addTo(this.ctrl)
    .setPin(this.$refs.video.$el)
    // .on('enter leave', (event) => {
    //   switch (event.type) {
    //     case 'enter':
    //       this.isBlur = true
    //       break
    //     default:
    //       this.isBlur = false
    //   }
    // })
    .addIndicators({ name: 'fixed-video19' })
  }
}
</script>

<style lang="scss">
.frame-19 {
  // z-index: 190;
  $frame: ".frame-18";
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &__trigger-sticky {
    position: absolute;
    top: 0;
  }

  &__video {
    width: 100%;
    height: 100%;
  }
}
</style>

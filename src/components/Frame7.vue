<template>
  <div class="frame frame-7">
    <div class="frame-7__trigger-sticky"
      ref="triggerSticky"></div>

    <AutoVideo class="frame-7__video"
      ref="video"
      :src="require('../assets/media/story1/index_part1_background_video2_m.mp4')"
      :src-large="require('../assets/media/story1/index_part1_background_video2_pc.mp4')"
      :blur="isBlur"
      :freeze="isBlur"
      :ctrl="ctrl"
      :poster="poster">
    </AutoVideo>

    <div class="frame-7__overlay"></div>
  </div>
</template>

<script>
import AutoVideo from './AutoVideo'

export default {
  name: 'Frame7',
  components: {
    AutoVideo
  },
  props: {
    ctrl: {
      type: Object
    },
    poster: {
      type: String
    }
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
      duration: height*3,
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
    // .addIndicators({ name: 'fixed-video7' })
  }
}
</script>

<style lang="scss">
.frame-7 {
  // z-index: 70;
  $frame: ".frame-7";
  width: 100%;
  height: 100vh;
  // overflow: hidden;

  &__trigger-sticky {
    position: absolute;
    top: 0;
  }

  &__video {
    width: 100%;
    height: 100%;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(0, 0, 0, 0.66);
    // z-index: 71;
  }
}
</style>

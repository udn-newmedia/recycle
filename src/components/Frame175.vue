<template>
  <div class="frame frame-175">
    <div class="frame-175__trigger-bg-fixed"
      ref="triggerBgFixed" />

    <div ref="bg" class="frame-175__bg fade-bg"></div>
  </div>
</template>

<script>
// import { TimelineMax } from 'gsap'

export default {
  name: 'Frame175',
  props: {
    ctrl: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerBgFixed,
      triggerHook: 0
    })
    .addTo(this.ctrl)
    .setTween(this.$refs.bg, 1, { opacity: 1 })
    // .addIndicators({ name: 'fadeout-frame17.5' })
  }
}
</script>

<style lang="scss">
.frame-175 {
  // z-index: 175;
  $frame: ".frame-175";
  height: 100vh;

  &__trigger-bg-fixed {}

  &__bg {
    background: url('../assets/images/story3/index_part3_background_img2_m.jpg') no-repeat center top/cover;

    @include rwd($RWD_TABLET){
      background: url('../assets/images/story3/index_part3_background_img2_pc.jpg') no-repeat center top/cover;
    }
  }
}
</style>

<template>
  <div class="frame frame-25">
    <div class="frame-25__trigger-bg-fixed"
      ref="triggerBgFixed" />

    <div ref="bg" class="frame-25__bg fade-bg"></div>
  </div>
</template>

<script>
// import { TimelineMax } from 'gsap'

export default {
  name: 'Frame25',
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
    .addIndicators({ name: 'fadeout-frame25' })
  }
}
</script>

<style lang="scss">
.frame-25 {
  // z-index: 250;
  $frame: ".frame-25";
  height: 100vh;

  &__trigger-bg-fixed {}

  &__bg {
    background: url('../assets/images/story3/index_part3_background_img4_m.jpg') no-repeat right top/cover;

    @include rwd($RWD_TABLET) {
      background: url('../assets/images/story3/index_part3_background_img4_pc.jpg') no-repeat center top/cover;
    }
  }
}
</style>

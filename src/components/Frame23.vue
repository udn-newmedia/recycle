<template>
  <div class="frame frame-23">
    <div class="frame-23__trigger-bg-fixed"
      ref="triggerBgFixed" />

    <div ref="bg" class="frame-23__bg fade-bg"></div>
  </div>
</template>

<script>
// import { TimelineMax } from 'gsap'

export default {
  name: 'Frame23',
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
    .addIndicators({ name: 'fadeout-frame23' })
  }
}
</script>

<style lang="scss">
.frame-23 {
  // z-index: 230;
  $frame: ".frame-23";
  height: 100vh;

  &__trigger-bg-fixed {}

  &__bg {
    background: url('../assets/images/story3/index_part3_background_img3_m.jpg') no-repeat center top/cover;

    @include rwd($RWD_TABLET) {
      background: url('../assets/images/story3/index_part3_background_img3_pc.jpg') no-repeat center top/cover;
    }
  }
}
</style>

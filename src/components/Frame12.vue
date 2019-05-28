<template>
  <div class="frame frame-12">
    <div class="frame-12__trigger-bg-fixed"
      ref="triggerBgFixed" />

    <div ref="bg" class="frame-12__bg fade-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'Frame12',
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
    // .addIndicators({ name: 'fade-bg-frame12' })
  }
}
</script>

<style lang="scss">
.frame-12 {
  $frame: ".frame-12";
  // z-index: 120;
  height: 100vh;

  &__trigger-bg-fixed {}

  &__bg {
    background: url('../assets/images/story2/index_part2_background_img2_m.jpg') no-repeat center top/cover;

    @include rwd($RWD_TABLET) {
      background: url('../assets/images/story2/index_part2_background_img2_pc.jpg') no-repeat center top/cover;
    }
  }
}
</style>

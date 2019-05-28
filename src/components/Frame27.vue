<template>
  <div class="frame frame-27">
    <div class="frame-27__trigger-trash"
      ref="triggerTrash" />

    <div ref="trash" class="frame-27__trash"></div>
  </div>
</template>

<script>
import { TimelineMax, Linear } from 'gsap'

export default {
  name: 'Frame27',
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
    let height = window.innerHeight
    let trashTween = new TimelineMax()
    .to(this.$refs.trash, 0.6, {
      bottom: 40,
      right: 100,
      rotation: 270,
      ease: Linear.easeNone
    })
    .to(this.$refs.trash, 0.2, {
      right: 30,
      rotation: 340,
      ease: Linear.easeNone
    })
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerTrash,
      triggerHook:'onLeave',
      offset: -height*0.5+'px'
    })
    .addTo(this.ctrl)
    .setTween(trashTween)
    .on('start', function (event) {
      trashTween.time(0)
    })
    // .addIndicators({ name: 'content-frame27' })
  }
}
</script>

<style lang="scss">
.frame-27 {
  // z-index: 100;
  $frame: ".frame-27";
  height: 180vh;

  &__trigger-trash {
    position: relative;
    // top: -30%;
  }

  &__trash {
    position: fixed;
    bottom: 120%;
    right: 30%;
    width: 90px;
    height: 90px;
    background: url('../assets/images/story2/index_part2_background_img.png') no-repeat center center/contain;

    @include rwd($RWD_TABLET) {
      width: 190px;
      height: 190px;
    }
  }
}
</style>

<template>
  <div class="frame frame-10">
    <div class="frame-10__trigger-trash"
      ref="triggerTrash" />

    <div ref="trash1" class="frame-10__trash1"></div>
    <div ref="trash2" class="frame-10__trash2"></div>
  </div>
</template>

<script>
import { TimelineMax, Linear } from 'gsap'

export default {
  name: 'Frame10',
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
    let trashTween = new TimelineMax()
      .to(this.$refs.trash1, 0.6, {
        bottom: 40,
        right: 100,
        rotation: 270,
        ease: Linear.easeNone
      })
      .to(this.$refs.trash1, 0.2, {
        right: 30,
        rotation: 340,
        ease: Linear.easeNone
      })
      .to(this.$refs.trash2, 0.6, {
        bottom: 40,
        right: 250,
        rotation: -270,
        ease: Linear.easeNone
      })
      .to(this.$refs.trash2, 0.2, {
        // right: 80,
        rotation: -300,
        ease: Linear.easeNone
      })
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerTrash,
      triggerHook:'onLeave',
      // reverse: false
    })
    .addTo(this.ctrl)
    .setTween(trashTween)
    .on('start', function (event) {
      trashTween.time(0)
    })
    // .addIndicators({ name: 'trash-frame10' })
  }
}
</script>

<style lang="scss">
.frame-10 {
  // z-index: 100;
  $frame: ".frame-10";
  height: 100vh;

  &__trigger-trash {
    position: absolute;
    top: -80%;
  }

  &__trash1 {
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

  &__trash2 {
    position: fixed;
    bottom: 110%;
    right: 30%;
    width: 65px;
    height: 65px;
    background: url('../assets/images/story2/index_part2_background_img2.png') no-repeat center center/contain;

    @include rwd($RWD_TABLET) {
      width: 110px;
      height: 110px;
    }
  }
}
</style>

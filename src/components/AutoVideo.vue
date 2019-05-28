<template>
  <div class="auto-video">
    <video webkit-playsinline playsinline muted loop
      ref="video"
      :style="videoStyle"
      :src="videoSource"
      :autoplay="auto"></video>
  </div>
</template>

<script>

const BLUR_DEFAULT = 8

export default {
  name: 'AutoVideo',
  props: {
    src: String,
    srcLarge: String,
    auto: { type: Boolean, default: true },
    blur: { type: Boolean, default: false },
    freeze: { type: Boolean, default: false },
    ctrl: {
      type: Object
    },
  },
  data () {
    return {
    }
  },
  computed: {
    videoStyle () {
      let blurValue = !this.blur ? 0 : BLUR_DEFAULT
      return {
        '-webkit-filter': `blur(${blurValue}px)`,
        'filter': `blur(${blurValue}px)`
      }
    },
    videoSource () {
      return !this.useLargeAssets ? this.src : this.srcLarge
    },
    useLargeAssets () {
      let mq = this.$mq
      return mq === 'tablet' || mq === 'desktop' || mq === 'desktopWide'
    }
  },
  watch: {
    freeze (value) {
      if (value) {
        this.pause()
      }
    }
  },
  methods: {
    onIntersect (entries) {
      if (!this.auto) {
        return
      }
      if (this.freeze) {
        this.pause()
        return
      }
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.2) {
          this.play()
        } else {
          this.pause()
        }
      })
    },
    play () {
      let video = this.$refs.video
      if (!video || !video.paused) {
        return
      }
      this.$refs.video.play()
    },
    pause () {
      let video = this.$refs.video
      if (!video || video.paused) {
        return
      }
      this.$refs.video.pause()
    }
  },
  mounted () {
    new this.$sm.Scene({
      triggerElement: this.$el,
      duration: '0',
      triggerHook:'onLeave',
    })
    .addTo(this.ctrl)
    .on('enter', ()=>{
      this.pause()
    })
    .on('leave', ()=>{
      this.play()
    })
    // .addIndicators({ name: 'auto-video' })
  }
}
</script>

<style lang="scss">
.auto-video {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
    position: absolute;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateX(-50%) scale(1.05);
    transition: filter 0.5s;
  }
}
</style>

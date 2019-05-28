<template>
  <section :id="'story' + id" class="story">
    <div class="story__trigger-unblur"
      ref="triggerUnblur" />

    <div class="story__trigger-sticky"
      ref="triggerSticky" />

    <div class="story__trigger-topic"
      ref="triggerTopic" />

    <div class="story__bg" style="overflow:hidden;">
      <div class="story__bg-wrapper" :style="bgWrapperStyle" ref="bg">
        <div class="story__bg-photo" :style="bgPhotoStyle"></div>
        <video class="story__bg-video" :style="bgVideoStyle" ref="video"
          :src="videoSource" v-if="video"
          webkit-playsinline playsinline muted loop autoplay>
        </video>
      </div>
    </div>

    <div class="story__topic"
      ref="topic"><!--
    --><template v-if="endingTitle"><!--
      --><h2 class="ending-title">{{ endingTitle }}</h2>
      </template>
      <template v-else-if="!subtitle"><!--
      --><h2 class="title">{{ title }}</h2>
      </template>
      <template v-else><!--
      --><h2 class="subtitle">{{ subtitle }}</h2><!--
      --><h1 class="title">{{ title }}</h1>
      </template>
    </div>

    <slot />
  </section>
</template>

<script>
import { TimelineMax } from 'gsap'

const BLUR_DEFAULT = 8

export default {
  name: 'Story',
  props: {
    id: Number,
    title: String,
    subtitle: String,
    endingTitle: String,
    photo: String,
    photoLarge: String,
    video: String,
    videoLarge: String,
    ctrl: {
      type: Object
    },
    height: {
      type: Number,
      default: 5
    },
    isPause: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bgBlur: BLUR_DEFAULT
    }
  },
  computed: {
    storyStyle () {
      let layer = this.id * 10
      return {
        'z-index': layer
      }
    },
    bgWrapperStyle () {
      return {
        '-webkit-filter': `blur(${this.bgBlur}px)`,
        'filter': `blur(${this.bgBlur}px)`
      }
    },
    bgPhotoStyle () {
      let photo = !this.useLargeAssets ? this.photo : this.photoLarge
      return {
        'background-image': `url(${photo})`
      }
    },
    bgVideoStyle () {
      return {}
    },
    videoSource () {
      return !this.useLargeAssets ? this.video : this.videoLarge
    },
    useLargeAssets () {
      let mq = this.$mq
      return mq === 'tablet' || mq === 'desktop' || mq === 'desktopWide'
    }
  },
  methods: {
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
    // bg blur
    let vm = this
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerUnblur,
      duration: '100%',
      triggerHook:'onLeave',
    })
    .addTo(this.ctrl)
    .on('progress', (event) => {
      let progress = event.progress.toFixed(2)
      this.bgBlur = Math.floor((1 - progress) * BLUR_DEFAULT)
    })
    .addIndicators({ name: 'bg-blur' })

    // sticky
    let height =  window.innerHeight;
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerSticky,
      duration: vm.height+'px',
      triggerHook:'onLeave',
    })
    .addTo(this.ctrl)
    .setPin(this.$refs.bg)
    .addIndicators({ name: 'bg-sticky' })

    // topic
    let topicTween = new TimelineMax()
      .to(this.$refs.topic, 2, {
        opacity: 0,
        // delay: 2
      })
    new this.$sm.Scene({
      triggerElement: this.$refs.triggerTopic,
      duration: '100%',
      triggerHook:'onLeave',
    })
    .addTo(this.ctrl)
    .setTween(topicTween)
    .setPin(this.$refs.topic)
    .addIndicators({ name: 'topic' })

    if(this.isPause==true){
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
      .addIndicators({ name: 'story-video-pause' })
    }
  }
}
</script>

<style lang="scss">
.story {
  position: relative;
  width: 100%;
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
  // z-index: 1;

  &__trigger-unblur {
    position: relative;
    top: 0vh;
  }

  &__trigger-sticky {
    position: relative;
    top: 0vh;
  }

  &__trigger-topic {
    position: relative;
    top: 0vh;
  }

  &__bg {
    // z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__bg-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform: scale(1.1);
    @include use-filter-blur(8);
  }

  &__bg-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeat center center/cover;
  }

  &__bg-video {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateX(-50%);
  }

  &__topic {
    position: relative;
    height: 100vh;
    text-align: center;
    @include use-vertical-align();
    h1.title {
      margin-right: 22px;
      font-size: 2.25rem;
      letter-spacing: 1rem;
      opacity: 0.8;

      @include rwd($RWD_DESKTOP_WIDE) {
        letter-spacing: 0.36px;
      }
    }

    &::after {
      content: "滑動繼續";
      z-index: 960;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 60px;
      display: inline-block;
      width: 60px;
      height: 46px;
      padding-top: 23px;
      color: #ECEBE4;
      font-size: 0.9375rem;
      background: url('../assets/images/index_chevron-down-solid.svg') no-repeat center top;
    }

    @include rwd($RWD_TABLET) {
      &::after {
        margin-bottom: 5%;
      }
    }

    .title,
    .ending-title {
      display: inline-block;
      vertical-align: middle;
      writing-mode: vertical-rl;
      font-size: 1.875rem;
      line-height: 2rem;
      letter-spacing: 0.25rem;
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

      @include rwd($RWD_TABLET) {
        font-size: 2.125rem;
      }

      @include rwd($RWD_DESKTOP_WIDE) {
        font-size: 2.125rem;
        letter-spacing: 0.1rem;
      }
    }

    .subtitle {
      position: relative;
      display: inline-block;
      margin: 55px 12px 0 0;
      vertical-align: middle;
      font-size: 1.375rem;
      letter-spacing: 0.875rem;
      line-height: 1.375rem;
      opacity: 0.8;
      writing-mode: vertical-rl;
      text-align: center;

      &::after {
        content: "？";
        position: relative;
        display: inline-block;
        writing-mode: horizontal-tb;
        width: 18px;
        height: 40px;
      }

      @include rwd($RWD_DESKTOP_WIDE) {
        letter-spacing: 0.36px;
      }
    }

    .ending-title {
      &::after {
        content: "？";
        position: relative;
        display: inline-block;
        writing-mode: horizontal-tb;
        width: 28px;
        height: 40px;
        padding-top: 4px;
      }
    }
  }
}
</style>

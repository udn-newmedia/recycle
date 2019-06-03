<template>
  <div class="scroll-spy" :class="{ active: active }">
    <div class="mobile"><!--
    --><a v-for="story in stories" :key="`mobile-${story.id}`"
        :class="{ 'spy-btn': true, active: focusStory === story.id }"
        :href="`#${story.id}`"
        :title="story.title"
        @click.prevent="onClick(story.id)"
      >{{ story.title }}</a><!--
  --></div>

    <div class="desktop"><!--
    --><a v-for="story in stories" :key="`desktop-${story.id}`"
        :class="{ 'spy-btn': true, active: focusStory === story.id }"
        :href="`#${story.id}`"
        :title="story.title"
        @click.prevent="onClick(story.id)"
      >{{ story.title }}</a><!--
  --></div>
  </div>

</template>

<script>
// import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'ScrollSpy',
  components: {
    // ProgressBar
  },
  props: {
    focusStory: { type: String, default: null },
    active: Boolean
  },
  data () {
    return {
      stories: [
        { id: 'story1', title: '問題一' },
        { id: 'story2', title: '問題二' },
        { id: 'story3', title: '問題三' },
        { id: 'story4', title: '解方' }
      ]
    }
  },
  methods: {
    onClick (storyId) {
      this.$emit('jump', { storyId })
      window.ga('newmedia.send', {
        'hitType': 'event',
        'eventCategory': 'Anchor point',
        'eventAction': 'click',
        'eventLabel': `page1point${storyId.split('story')[1]}`
      })
    }
  },
  mounted () {
    // console.log(this.active)
  }
}
</script>

<style lang="scss">
  .scroll-spy {
    position: fixed;
    left: 40px;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    opacity: 0;
    backface-visibility: hidden;
    z-index: 9999;
    // outline: 5px solid red;

    &.active {
      opacity: 1;
      backface-visibility: hidden;
    }

    @media screen and (min-width: 960px) {
      z-index: 900;
      top: 0;
      left: 40px;
      width: auto;
      height: 100vh;
      transform: translateY(30px);
      transition: transform 0.3s linear, opacity 0.3s linear;

      &.active {
        opacity: 1;
        transform: translateY(0);
        transition: transform 0.3s linear, opacity 0.3s linear;
        backface-visibility: hidden;
      }

      &::before {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
      }
    }

    @media screen and (min-width: 1280px) {
      left: 140px;
    }

    & .mobile {
      display: block;

      @media screen and (min-width: 520px) {
        padding-left: 20px;
        text-align: left;
      }

      @media screen and (min-width: 960px) {
        display: none;
      }
    }

    & .desktop {
      position: relative;
      display: none;
      vertical-align: middle;

      .spy-btn {
        display: block;
        padding-right: 0;
        height: 15%;
        min-height: 100px;
        padding-bottom: 30px;
        font-size: .9375rem;
        color: #AEAEAE;
        letter-spacing: 1rem;
        writing-mode: vertical-rl;
        text-decoration: none;
        cursor: pointer;

        &.active {
          color: #FF3737;
        }
      }

      @media screen and (min-width: 960px) {
        display: inline-block;
      }
    }
  }

  .spy-btn {
    display: inline-block;
    width: 25%;
    color: #CBCBCB;
    font-size: 0.9375rem;
    text-decoration: none;
    cursor: pointer;

    @media screen and (min-width: 520px) {
      width: auto;
      padding-right: 20px;
    }
    &.active {
      color: #000000;
    }
  }
</style>

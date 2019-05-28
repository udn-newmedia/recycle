<template>
  <div class="scroll-spy">
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
    focusStory: { type: String, default: null }
  },
  data () {
    return {
      stories: [
        { id: 'story1', title: '清潔隊' },
        { id: 'story2', title: '焚化爐' },
        { id: 'story3', title: '回收場' },
        { id: 'story4', title: '紙廠' }
      ]
    }
  },
  methods: {
    onClick (storyId) {
      this.$emit('jump', { storyId })
    }
  }
}
</script>

<style lang="scss">
  .scroll-spy {
    display: inline-block;
    width: 100%;
    text-align: center;

    @include rwd($RWD_DESKTOP) {
      z-index: 900;
      position: fixed;
      top: 0;
      left: 40px;
      width: auto;
      height: 100vh;

      @include use-vertical-align();
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      left: 140px;
    }

    & .mobile {
      display: block;

      @include rwd($RWD_TABLET_SMALL) {
        padding-left: 20px;
        text-align: left;
      }

      @include rwd($RWD_DESKTOP) {
        display: none;
      }
    }

    & .desktop {
      display: none;
      vertical-align: middle;

      .spy-btn {
        display: block;
        padding-right: 0;
        padding-bottom: 30px;
        font-size: .9375rem;
        color: #FFFFFF;
        letter-spacing: 1rem;
        writing-mode: vertical-rl;

        &.active {
          color: #FF3737;
        }
      }

      @include rwd($RWD_DESKTOP) {
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

    @include rwd($RWD_TABLET_SMALL) {
      width: auto;
      padding-right: 20px;
    }
    &.active {
      color: #000000;
    }
  }
</style>

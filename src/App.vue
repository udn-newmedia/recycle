<template>
  <div class="app" :class="className">
    <Header
      :focus-story="focusStory"
      @slideMenuTrigger="onClassChange"
      @scrollSpyJump="onScrollSpyJump"
      :scrolled= isScrolled>
    </Header>

    <Story
      ref="story0"
      :id="0"
      title="消失的紙餐盒"
      subtitle="回收一場空"
      :photo="require('@/assets/images/story0/index_cover_background_video_m.jpg')"
      :photo-large="require('@/assets/images/story0/index_cover_background_video_pc.jpg')"
      :video="require('@/assets/media/story0/index_cover_background_video_m.mp4')"
      :video-large="require('@/assets/media/story0/index_cover_background_video_pc.mp4')"
      :ctrl="ctrl"
      :height="height*3"
      :poster="srcRWD(require('@/assets/images/story0/index_cover_background_video_m.jpg'), require('@/assets/images/story0/index_cover_background_video_pc.jpg'))">
      <Frame2 />
      <Frame4 />
    </Story>

    <Story
      ref="story1"
      :id="1"
      title="第一站　清潔隊"
      :photo="require('./assets/images/story1/index_part1_background_video1_m.jpg')"
      :photo-large="require('./assets/images/story1/index_part1_background_video1_pc.jpg')"
      :video="require('./assets/media/story1/index_part1_background_video1_m.mp4')"
      :video-large="require('./assets/media/story1/index_part1_background_video1_pc.mp4')"
      :ctrl="ctrl"
      :height="height*4"
      :isPause="true"
      :poster="srcRWD(require('./assets/images/story1/index_part1_background_video1_m.jpg'), require('./assets/images/story1/index_part1_background_video1_pc.jpg'))">
      <Frame6 />
      <Frame7 :ctrl="ctrl" :poster="srcRWD(require('./assets/images/story1/index_part1_background_video2_m.jpg'), require('./assets/images/story1/index_part1_background_video2_pc.jpg'))"/>
      <Frame8 />
    </Story>

    <Story
      ref="story2"
      :id="2"
      title="第二站　焚化爐"
      :photo="require('@/assets/images/story2/index_part2_background_img1_m.jpg')"
      :photo-large="require('@/assets/images/story2/index_part2_background_img1_pc.jpg')"
      :ctrl="ctrl"
      :height="height*6">
      <Frame10 :ctrl="ctrl"/>
      <Frame11 />
      <Frame12 :ctrl="ctrl"/>
      <Frame13 :ctrl="ctrl"/>
    </Story>

    <Story
      ref="story3"
      :id="3"
      title="第三站　回收場"
      :photo="require('@/assets/images/story3/index_part3_background_img1_m.jpg')"
      :photo-large="require('@/assets/images/story3/index_part3_background_img1_pc.jpg')"
      :ctrl="ctrl"
      :height="height*9">
      <Frame27 :ctrl="ctrl"/>
      <Frame16 />
      <Frame17 />
      <Frame175 :ctrl="ctrl"/>
      <Frame18 :ctrl="ctrl"/>
      <Frame19 :ctrl="ctrl" :poster="srcRWD(require('@/assets/images/story3/index_part3_background_video1_m.jpg'), require('@/assets/images/story3/index_part3_background_video1_pc.jpg'))"/>
      <Frame20 />
      <Frame21 :ctrl="ctrl" :poster="srcRWD(require('@/assets/images/story3/index_part3_background_video2_m.jpg'), require('@/assets/images/story3/index_part3_background_video2_pc.jpg'))"/>
      <Frame22 />
      <Frame23 :ctrl="ctrl"/>
      <Frame24 />
      <Frame25 :ctrl="ctrl"/>
      <Frame26 />
    </Story>

    <Story
      ref="story4"
      :id="4"
      title="第四站　紙廠"
      :photo="require('@/assets/images/story4/index_part4_background_img_m.jpg')"
      :photo-large="require('@/assets/images/story4/index_part4_background_img_pc.jpg')"
      :ctrl="ctrl"
      :height="height*6">
      <Frame27 :ctrl="ctrl"/>
      <Frame28 :ctrl="ctrl"/>
    </Story>

    <Story
      ref="story5"
      :id="5"
      ending-title="你要怎麼做"
      :photo="require('@/assets/images/story5/index_part5_background_img_m.jpg')"
      :photo-large="require('@/assets/images/story5/index_part5_background_img_pc.jpg')"
      :ctrl="ctrl"
      :height="height*5">
      <Frame30 />
      <Frame31 :ctrl="ctrl"/>
    </Story>
    <content-container style="background:#30343f;color:#e4e4e4;">
      <br>
      <br>
      <br>
      <br>
      <share href="http://nmdap.udn.com.tw/upf/newmedia/2019_data/recycle/"></share>
      <br>
      <br>
      <br>
      <editor style="color:#e4e4e4;">
        <div>採訪團隊：鄭朝陽、郭政芬、張裕珍、林敬家、張雅婷、陳斯穎、許政榆、賴香珊、范榮達、魏翊庭、喻文玟</div>
        <div>製作人：洪欣慈</div>
        <div>影像：黃仲裕、林澔一、郭政芬、張裕珍、林敬家、張雅婷、許政榆、賴香珊、報系資料照</div>
        <div>視覺設計：張心慈</div>
        <div>網頁製作：曾雅珮、謝化挺</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.06.05</div>
      </editor>
      <br>
      <logo use-ubrand="no" use-vision='no'></logo>
      <br>
      <br>
      <question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></question>
      <br>
      <br>
      <br>
      <relate
        text1="調查報導／塑膠袋垃圾危機 真正回收不到一成" href1="https://udn.com/news/story/7266/3726270" :img1="require('@/assets/images/story5/index_part5_read1.jpg')"
        text2="清潔隊回收物全丟垃圾車 宜蘭市公所查辦" href2="https://udn.com/news/story/7328/3774913" :img2="require('@/assets/images/story5/index_part5_read2.jpg')"
        text3="翻出廢帳單... 亂丟垃圾重罰6千" href3="https://udn.com/news/story/7325/3742399" :img3="require('@/assets/images/story5/index_part5_read3.jpg')"
        text4="廢紙廢塑膠大量進口 監委促請主管機關改進" href4="https://udn.com/news/story/7314/3743420" :img4="require('@/assets/images/story5/index_part5_read4.jpg')">
      </relate>
    </content-container>
    <content-container>
      <FbComment href="https://udn.com/upf/newmedia/2019_data/recycle/"/>
    </content-container>
    <Footer />
    <GoTop />
    <!-- <div style="height: 100vh; border: 4px solid crimson;"></div> -->

  </div>
</template>

<script>
import { TweenMax, Power2, ScrollToPlugin } from 'gsap/all'
import Story from '@/components/Story'
import Header from '@/components/Header'

// story0
import Frame2 from '@/components/Frame2'
import Frame4 from '@/components/Frame4'
// story1
import Frame6 from '@/components/Frame6'
import Frame7 from '@/components/Frame7'
import Frame8 from '@/components/Frame8'
// story2
import Frame10 from '@/components/Frame10'
import Frame11 from '@/components/Frame11'
import Frame12 from '@/components/Frame12'
import Frame13 from '@/components/Frame13'
// story3
import Frame16 from '@/components/Frame16'
import Frame17 from '@/components/Frame17'
import Frame175 from '@/components/Frame175'
import Frame18 from '@/components/Frame18'
import Frame19 from '@/components/Frame19'
import Frame20 from '@/components/Frame20'
import Frame21 from '@/components/Frame21'
import Frame22 from '@/components/Frame22'
import Frame23 from '@/components/Frame23'
import Frame24 from '@/components/Frame24'
import Frame25 from '@/components/Frame25'
import Frame26 from '@/components/Frame26'
// story4
import Frame27 from '@/components/Frame27'
import Frame28 from '@/components/Frame28'
// story5
import Frame30 from '@/components/Frame30'
import Frame31 from '@/components/Frame31'

import FbComment from '@/components/FbComment'
import Footer from '@/components/Footer'

import ContentContainer from './components/Content.vue'
import Editor from './components/Editor.vue'
import Logo from './components/Logo.vue'
import Relate from './components/Relate.vue'
import Share from './components/Share.vue'
import Question from './components/Question.vue'

import GoTop from './components/GoTop'

// reference doc: https://greensock.com/docs/NPMUsage
// prevent TweenMax plugin removed by tree shaking
/* eslint-disable no-unused-vars */
const TweenPlugins = [ ScrollToPlugin ]

const THRESHOLD = [
  0.05, 0.1,
  0.15, 0.2,
  0.25, 0.3,
  0.35, 0.4,
  0.45, 0.5,
  0.55, 0.6,
  0.65, 0.7,
  0.75, 0.8,
  0.85, 0.9,
  0.95, 1.0
]

export default {
  name: 'App',
  components: {
    Story,
    Header,
    // story0
    Frame2,
    Frame4,
    // story1
    Frame6,
    Frame7,
    Frame8,
    // stroy2
    Frame10,
    Frame11,
    Frame12,
    Frame13,
    // stroy3
    // Frame15 - 27
    Frame16,
    Frame17,
    Frame175,
    Frame18,
    Frame19,
    Frame20,
    Frame21,
    Frame22,
    Frame23,
    Frame24,
    Frame25,
    Frame26,
    // story4
    Frame27,
    Frame28,
    // Story5
    Frame30,
    Frame31,
    FbComment,
    Footer,
    ContentContainer,
    Editor,
    Logo,
    Relate,
    Share,
    Question,
    GoTop
  },
  data () {
    return {
      isSlideMenuTrigger: false,
      isScrollSpyJumping: false,
      focusStory: null,
      ctrl: new this.$sm.Controller(),
      observer: null,
      height: window.innerHeight,
      isScrolled: false
    }
  },
  computed: {
    className () {
      return {
        'slide-menu-open': this.isSlideMenuTrigger,
        [this.focusStory]: !!this.focusStory
      }
    }
  },
  methods: {
    onBeforeUnload () {
      // window.scrollTo(0, 0)
    },
    onScrollSpyJump ({ storyId }) {
      let target = this.$refs[storyId].$el
      this.isScrollSpyJumping = true
      TweenMax.to(window, 1, {
        scrollTo: {
          y: target,
          autoKill: false
        },
        onComplete: this.onScrollSpyJumped
      })
    },
    onScrollSpyJumped () {
      this.isScrollSpyJumping = false
    },
    onTransition ({ direction, storyId }) {
      if (this.isScrollSpyJumping) {
        return
      }
      let target = this.$refs[`story${storyId}`].$el
      let offsetY = 0
      let ease = Power2.easeInOut
      if (direction === 'REVERSE') {
        // scroll reverse direction, align to bottom of story by offsetY
        offsetY = window.innerHeight - target.offsetHeight
      }
      TweenMax.to(window, 1, {
        scrollTo: {
          y: target,
          offsetY,
          autoKill: false
        },
        ease
      })
    },
    onStoryIntersection (entries) {
      let maxStoryRatio = 0
      let focusStory = null
      entries.forEach((entry) => {
        let { target, intersectionRatio } = entry
        let ratio = Math.round(intersectionRatio * 1000) / 100
        if (ratio > 0 && ratio >= maxStoryRatio) {
          maxStoryRatio = ratio
          focusStory = target.id
        }
      })
      this.focusStory = focusStory
    },
    onClassChange () {
      this.isSlideMenuTrigger = !this.isSlideMenuTrigger
    },
    srcRWD: function (mob, pc) {
      if (window.innerWidth > 768) {
        return pc
      }else {
        return mob
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('beforeunload', this.onBeforeUnload)
  },
  mounted () {
    window.addEventListener('beforeunload', this.onBeforeUnload)
    // observe story intersetion
    this.observer = new IntersectionObserver(this.onStoryIntersection, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: THRESHOLD
    })
    let stories = [
      this.$refs.story0,
      this.$refs.story1,
      this.$refs.story2,
      this.$refs.story3,
      this.$refs.story4,
      this.$refs.story5
    ]
    stories.forEach((story) => {
      this.observer.observe(story.$el)
    })

    window.addEventListener('scroll', (event) => {
      if (window.scrollY >= 20) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    })
  }
}
</script>

<style lang="scss" src="@/assets/styles/app.scss"></style>

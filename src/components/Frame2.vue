<template>
  <div class="frame frame-2">
    <div class="frame-2__bg"></div>
    <div class="frame-2__summary">
      <p>喝完的咖啡紙杯、吃完的便當盒，你會怎麼處理？台灣推動資源回收超過20年，多數人都已養成習慣，會乖乖將餐盒、紙杯清洗後放入資源回收桶。</p>
      <p>慈濟基金會內湖回收站每月回收1200公斤的紙容器，上百名志工們不分寒暑、晴雨都來回收站報到，認真彎腰分類，堅信回收可以愛地球、減少資源耗費。</p>
      <p>夜裡工作的垃圾車清潔隊員也堅守崗位，沒分類的垃圾不僅拒收，有時還現場教學如何分類，聲音傳遍巷弄，民眾稱：「誰敢不分類？」</p>
      <p>但民眾、志工、清潔隊員的乖乖回收做環保恐是一場空！台灣每年消耗超過80億個紙餐盒、紙杯，每人平均每月用掉28個，不管源頭有沒有分類，7成以上最後都進入焚化爐，和一般垃圾一起燒毀。《聯合報》直擊調查，找到三大回收黑洞，揭露紙餐盒回收攏係假的內幕。</p>
    </div>
    <div class="frame-2__social"><!--
    --><a class="frame-2__share-facebook" title="FB分享" @click.prevent.stop="onShareFacebook"><!--
      --><i class="fab fa-facebook-f" /></a><!--
    --><a class="frame-2__share-line" title="LINE分享" target="_blank" :href="lineSharedUrl" @click="onLineShare"><!--
      --><img src="@/assets/images/share-line.png" alt="LINE分享" /></a>
    </div>
  </div>
</template>

<script>
import { detectPlatform } from 'udn-newmedia-utils'

export default {
  name: 'Frame2',
  data () {
    return {}
  },
  computed: {
    sharedUrl () {
      let url = window.location.href
      return url.replace(/^http:\/\//, 'https://')
    },
    lineSharedUrl () {
      let sharedUrl = this.sharedUrl
      let sharedText = document.title
      // desktop
      if (!this.$isMobile) {
        return `https://lineit.line.me/share/ui?text=${encodeURIComponent(sharedText)}&url=${encodeURIComponent(sharedUrl)}`
      }
      // mobile
      if (!this.$isInApp) {
        return `https://line.me/R/msg/text/${encodeURIComponent(sharedText)} ${encodeURIComponent(sharedUrl)}`
      }
      // mobile in-app webview
      return `https://line.naver.jp/R/msg/text/?${encodeURIComponent(sharedUrl)}`
    }
  },
  methods: {
    onShareFacebook () {
      let fbShareConfig = {
        method: 'share',
        display: 'popup',
        href: this.sharedUrl
      }
      window.FB && window.FB.ui(fbShareConfig)

      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'click',
        eventLabel: 'Click_FBtop'
      })
    },
    onLineShare () {
      window.ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'click',
        eventLabel: 'Click_Linetop'
      })
    }
  }
}
</script>

<style lang="scss">
.frame-2 {
  // z-index: 20;
  $frame: ".frame-2";
  padding-top: 350px;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(48, 52, 63, 0) 0%,
      rgba(48, 52, 63, 0.7) 200px,
      rgba(48, 52, 63, 1) 300px,
      rgba(48, 52, 63, 1) 100%);
  }

  &__summary {
    position: relative;
    margin: 0 auto 0 auto;
    width: 95%;

    p {
      font-size: 1.125rem;
      margin-bottom: 20px;
    }

    @include rwd($RWD_DESKTOP) {
      padding: 0 100px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      max-width: 812px;
      padding: 0;
      line-height: 1.9375rem;

      p{
        font-size: 1.3125rem;
        margin-bottom: 45px;
      }
    }
  }

  &__social {
    position: relative;
    padding: 45px 0 120px 0;
    text-align: center;

    a {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      text-align: center;
      cursor: pointer;
      vertical-align: top;

      @include use-vertical-align();
    }

    a + a {
      margin-left: 12px;
    }

    i {
      display: inline-block;
      position: relative;
      font-size: 1.625em;
      color: #E8E8E8;
      vertical-align: middle;
    }
  }

  &__share-facebook {
  }

  &__share-line {
    text-align: center;

    img {
      display: inline-block;
      width: 70%;
      vertical-align: middle;
    }
  }
}
</style>

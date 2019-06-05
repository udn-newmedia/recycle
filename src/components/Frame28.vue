<template>
  <div class="frame frame-28">
    <div class="frame-28__trigger-blackhole"
      ref="triggerBlackhole" />

    <div ref="bhcontent" class="frame-28__blackhole-content blackhole-contents">
      <div ref="spacer" class="spacer"></div>
      <div ref="blackhole" class="frame-28__blackhole blackhole"></div>

      <div ref="content" class="frame-28__content content">
        <div class="frame28__content-layout bh-content-layout">
          <div class="frame-28__blackhole-title bh-title">
            <p>黑洞三：</p>
            <p>進入紙廠死路一條</p>
          </div>
          <div class="frame-28__content bh-content">
            <p>未進專業處理厰的紙餐盒，焚化爐、「自燃」外的另一條路是混入紙廠。</p>
            <p>過去回收商將紙容器混在紙類一起混入紙廠的情形相當普遍，有紙廠私下告訴記者，在中國大陸禁廢、
              <dictionary title="洋垃圾風暴">
                <p style="padding:0;">2017年中國大陸頒布「禁廢令」，宣告2018年起不再接受包括廢紙、廢塑等24種廢棄物進口，國際廢紙價格因而大跌，國內紙廠開始收購便宜的海外廢紙，衝擊國內廢紙回收體系。</p>
              </dictionary>
              前，回收商態度相當強硬，甚至嗆過紙廠「你們不收我可以賣給中國大陸」。彰化縣埔心鄉一家回收業者透露，回收業者會將紙容器混合紙類壓製成紙磚送往紙廠，若檢查過關能順利進到紙廠，「等於是中盤賺到」。</p>
            <div class="frame-28__content-images">
              <img class="mobile" src="@/assets/images/story4/index_part4_article_img1_m.jpg" alt="回收場常將紙容器混在一般紙類裡偷渡進紙廠。">
              <img class="desktop" src="@/assets/images/story4/index_part4_article_img1_pc.jpg" alt="回收場常將紙容器混在一般紙類裡偷渡進紙廠。">
            </div>
          </div>
          <div class="frame-28__content bh-content">
            <p>但對紙廠而言，<b>紙容器混入紙廠的命運一樣是變垃圾</b>。正隆紙業竹北廠廠長蔡石玉指出，一般廢紙倒進紙廠的散漿機後，只需幾秒就可打散，「紙容器根本打不散」，紙廠也只能當成垃圾處理。</p>
            <p>造紙公會統計，紙容器混雜最嚴重時紙廠排渣率平均高達12％，等同每100公斤的紙磚就有12公斤是廢料。洋垃圾風暴後，紙廠對入廠的紙磚純度要求變嚴格，回收商怕被紙廠「打槍」分類較認真，狀況略好轉，排渣率降到4％到5％。</p>
            <div class="frame-28__content-images">
              <img class="mobile" src="@/assets/images/story4/index_part4_article_img2_m.jpg" alt="一般紙廠無法打散帶有塑膠膜的紙餐盒。">
              <img class="desktop" src="@/assets/images/story4/index_part4_article_img2_pc.jpg" alt="一般紙廠無法打散帶有塑膠膜的紙餐盒。">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { TimelineMax, Linear } from 'gsap'
// import { TimelineMax } from 'gsap'
import Dictionary from '../components/Dictionary.vue'
export default {
  name: 'Frame28',
  components: {
    Dictionary
  },
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
    // new this.$sm.Scene({
    //   triggerElement: this.$refs.triggerBlackhole,
    //   duration: '30%'
    //   // triggerHook: 0
    // })
    // .addTo(this.ctrl)
    // .setPin(this.$refs.blackhole)
    // .addIndicators({ name: 'blackhoe-frame28' })

    // blackhole trigger
    // let blackholeContentTween = new TimelineMax()
    //   .to(this.$refs.content, 1, {
    //     top: '-50vh'
    //   })
    // new this.$sm.Scene({
    //   triggerElement: this.$refs.triggerBlackhole,
    //   duration: 400
    // })
    //   .addTo(this.ctrl)
    //   // .setTween(blackholeContentTween)
    //   .setTween(this.$refs.content, 1, { top: '0' })
    //   .setPin(this.$refs.bhcontent)
    //   // .addIndicators({ name: 'blackhole-frame28' })

    // new this.$sm.Scene({
    //   triggerElement: this.$refs.triggerBlackhole,
    //   duration: 230
    // })
    //   .addTo(this.ctrl)
    //   .setTween(this.$refs.spacer, 1, { height: '35vh' })
    //   // .addIndicators({ name: 'content-frame28' })
  }
}
</script>

<style lang="scss">
.frame-28 {
  // z-index: 280;
  $frame: ".frame-28";

  &__trigger-blackhole {
    position: absolute;
    top: 120vh;
  }

  &__blackhole-content {}

  &__blackhole {
  }

  &__contents {}

  &__content {
    z-index: 281;
    // position: relative;
    // background-color: #30343f;
    // font-size: 1.125rem;
    // line-height: 1.5rem;
    // padding: 0 16px;
    // outline: 10px solid salmon;

    & + #{$frame}__content {
      // padding: 200px 16px 270px;
    }

    @include rwd($RWD_TABLET) {
      // padding: 0 160px;

      & + #{$frame}__content {
        // padding: 200px 160px 270px!important;
      }
    }

    p {
      // margin-bottom: 20px;
    }

    p + p {
      // margin-bottom: 15px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      // padding: 0;
      // padding: 200px 0 270px 0;

      p + p {
        // margin-bottom: 30px;
      }
    }
  }

  &__content-images {
    position: relative;
    width: 100%;
    height: auto;

    img {
      position: relative;
      display: block;
      width: 100%;
      height: auto;

      &.desktop {
        display: none;
      }
    }

    @include rwd($RWD_TABLET) {
      img {
        &.mobile {
          display: none;
        }

        &.desktop {
          display: block;
        }
      }
    }
  }
}
</style>

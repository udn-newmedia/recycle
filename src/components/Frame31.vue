<template>
  <div class="frame frame-31">
    <div class="frame-31__bg"></div>
    <div class="frame-31__trigger-blackhole"
      ref="triggerBlackhole" />

    <div ref="bhcontent" class="frame-31__contents blackhole-contents">
      <div ref="blackhole" class="frame-31__blackhole blackhole"></div>

      <div ref="content" class="frame-31__content content">
        <!-- <div class="spacer2"></div> -->
        <div class="frame-31__content-layout bh-content-layout">
          <div class="frame-31__complain-btns">
            <div class="frame-31__complain-btns-layout">
              <div class="frame-31__title"><p>看完一肚子不滿，有好多話想說嗎？</p></div><!--
              --><a href="https://service.president.gov.tw/newmailbox/write_begin.aspx" class="frame-31__complain-btn" title="寫信給總統" target="_blank">寫信給總統</a><!--
              --><a href="https://eyemail.ey.gov.tw/WWW/MailToPremier.aspx" class="frame-31__complain-btn" title="行政院長電子信箱" target="_blank">行政院長電子信箱</a><!--
              --><a href="https://www.facebook.com/MOENR.TW/" class="frame-31__complain-btn" title="環保署粉絲專頁" target="_blank">環保署粉絲專頁</a><!--
            --></div>
          </div>
          <!-- <Share /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { TimelineMax } from 'gsap'
import Share from '@/components/Share'

export default {
  name: 'Frame31',
  components: {
    Share
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
    //   duration: '50%'
    //   // triggerHook: 0
    // })
    // .addTo(this.ctrl)
    // .setPin(this.$refs.blackhole)
    // .addIndicators({ name: 'blackhoe-frame31' })
  }
}
</script>

<style lang="scss">
.frame-31 {
  // z-index: 310;
  $frame: ".frame-31";

  &__trigger-blackhole {
    position: absolute;
    top: 50vh;
  }

  &__bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(48, 52, 63, 0.8);
    z-index: -1;
  }

  &__contents {
    text-align: center;
  }

  &__blackhole {
  }

  &__content {}

  &__content-layout {
    height: 100vh;
    padding-bottom: 237px!important;
    background-color: transparent!important;

    @include use-vertical-align();

    // @include rwd($RWD_TABLET) {
    //   min-height: 100vh;
    //   height: auto;
    // }
  }

  &__complain-btns {
    display: inline-block;
    vertical-align: middle;

    @include rwd($RWD_TABLET) {
      height: 100vh;

      @include use-vertical-align();
    }
  }

  &__complain-btns-layout {
    @include rwd($RWD_TABLET) {
      display: inline-block;
      vertical-align: middle;
    }
  }

  &__title {
    margin-bottom: 45px;
    padding: 0 25px;
    text-align: left;

    p {
      margin: 0;
      font-size: 1.375rem;
    }

    @include rwd($RWD_TABLET) {
      text-align: center;

      p {
        font-size: 1.625rem;
        font-weight: bold;
      }
    }
  }

  &__complain-btn {
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
    width: 255px;
    height: 65px;
    line-height: 65px;
    font-size: 0.9375rem;
    color: #000000;
    text-decoration: none;
    background-color: #EBEBEB;
    border-radius: 5px;
    text-align: center;

    @include rwd($RWD_TABLET) {
      display: inline-block;
      width: 182px;
      margin-right: 12px;
      font-weight: bold;

      & + #{$frame}__complain-btn {
        margin: 0
      }

      & + #{$frame}__complain-btn + #{$frame}__complain-btn {
        margin-left: 12px;
      }
    }
  }

  // &__share-block {
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   padding: 0 16px;
  //   height: 140px;
  //   background-color: #30343f;
  //   color: #EBEBEB;
  //   text-align: left;

  //   &::before {
  //     content: "";
  //     display: inline-block;
  //     width: 100%;
  //     height: 1px;
  //     background-color: #FFFFFF;
  //     opacity: 0.2;
  //   }

  //   @include rwd($RWD_TABLET) {
  //     padding: 0 85px 5px;
  //   }
  // }

  // &__share {
  //   display: inline-block;
  //   padding-top: 80px;
  //   margin-left: 29px;
  //   cursor: pointer;

  //   & + #{$frame}__share {
  //     margin: 0;
  //   }
  // }
}
</style>

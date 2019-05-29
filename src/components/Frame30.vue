<template>
  <div class="frame frame-30">
    <div class="frame-30__contents">
      <div class="frame-30__content">
        <div class="frame-30__title">
          <p>紙餐盒回收過程中漏洞不斷，讓多數餐盒無法進入回收體系，知道紙餐盒的命運後，身為民眾的你，想要怎麼做？</p>
        </div>
        <div class="frame-30__choose-layout"><!--
          --><div class="frame-30__choose">
            <p>外食一定會用到，政府可不可以好好解決問題？</p>
            <a @click="click_choice1" href="https://udn.com/upf/newmedia/2019_data/recycle/government" class="frame-30__choose-btn" title="" target="_blank">選這個</a>
          </div><!--
          --><div class="frame-30__choose">
            <p>靠自己最實際，我想少用可以怎麼做？</p>
            <a @click="click_choice2" href="https://udn.com/upf/newmedia/2019_data/recycle/reduction" class="frame-30__choose-btn" title="" target="_blank">選這個</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame30',
  methods: {
    //GA
    click_choice1(){
      ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'click',
        eventLabel: `choice1`,
      });
    },
    click_choice2(){
      ga('newmedia.send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'click',
        eventLabel: `choice2`,
      });
    },
    //GA
  }
}
</script>

<style lang="scss">
.frame-30 {
  // z-index: 300;
  $frame: ".frame-30";

  &__contents {
    width: 100%;
    height: 100vh;
    background: rgba(48, 52, 63, 0.8);
    text-align: center;

    @include use-vertical-align();

  }

  &__content {
    display: inline-block;
    vertical-align: middle;
    // outline: 1px solid red;

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 812px;
      margin: 0 auto;
    }
  }

  &__title {
    width: 95%;
    max-width: 364px;
    margin: 0 auto;
    margin-bottom: 45px;
    font-weight: bold;
    text-align: left;

    p {
      font-size: 1.375rem;
      margin: 0;
    }

    @include rwd($RWD_TABLET_SMALL) {
      width: auto;
      max-width: none;
      padding: 0 24px;
    }

    @include rwd($RWD_TABLET) {
      padding: 0 160px;

      p {
        font-size: 1.625rem;
        line-height: 2.4375rem;
      }
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      padding: 0;
      margin-bottom: 70px;
      text-align: center;
    }
  }

  &__choose-layout {
    @include rwd($RWD_TABLET) {
      padding: 0 160px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      padding: 0 45px;
    }
  }

  &__choose {
    display: inline-block;
    width: 45%;
    height: 100%;
    max-width: 182px;
    height: 100%;
    padding-right: 14px;
    border-right: 1px solid #8D8D8D;
    text-align: center;
    // outline: 1px solid red;

    & + #{$frame}__choose {
      padding-right: 0;
      padding-left: 14px;
      border-right: none;
    }

    p {
      margin: 0;
      margin-bottom: 24px;
      height: 90px;
      text-align: left;
      font-size: 0.9375em;
    }

    @include rwd($RWD_TABLET_SMALL) {
      width: 50%;
      max-width: none;
      padding: 0 14px 0 25px;

      & + #{$frame}__choose {
        padding: 0 25px 0 14px;
      }
    }

    @include rwd($RWD_TABLET) {

      p {
        font-size: 0.9375rem;
      }
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 253px;
      padding: 0 23px 0;

      & + #{$frame}__choose {
        padding: 0 0 0 23px;
      }

      p {
        height: 60px;
        font-size: 1.1325rem;
        line-height: 1.9375rem;
      }
    }
  }

  &__choose-btn {
    display: inline-block;
    width: 100%;
    max-width: 145px;
    height: 65px;
    line-height: 65px;
    font-size: 0.9375rem;
    color: #000000;
    text-decoration: none;
    background-color: #EBEBEB;
    border-radius: 5px;
    font-weight: bold;
  }
}
</style>

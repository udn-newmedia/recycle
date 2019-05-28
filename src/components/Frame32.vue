<template>
  <div class="frame frame-32">
    <div class="frame-32__contents">
      <div class="frame-32__editors">
        <div class="frame-32__editor">採訪團隊：鄭朝陽、郭政芬、張裕珍、林敬家、張雅婷、陳斯穎、許政榆、賴香珊、范榮達、魏翊庭</div>
        <div class="frame-32__editor">製作人：洪欣慈</div>
        <div class="frame-32__editor">影像：黃仲裕、郭政芬、張裕珍、林敬家、張雅婷、許政榆、賴香珊、報系資料照</div>
        <div class="frame-32__editor">視覺設計：張心慈</div>
        <div class="frame-32__editor">監製：林秀姿、潘如瑩、董谷音</div>
        <div class="frame-32__editor">2019.05.30</div>
      </div>

      <div class="frame-32__brand-links">
        <a href="https://udn.com/news/index" class="frame-32__brand-link" title="聯合新聞網" target="_blank">
          <img src="@/assets/images/story5/udn_logo_white.svg" alt="聯合新聞網UDN">
        </a>
        <a href="/" class="frame-32__brand-link" title="新媒體中心" target="_blank">
          <img src="@/assets/images/story5/newmedia_logo_white.svg" alt="聯合報新媒體中心">
        </a>
      </div>

      <a href="https://www.surveycake.com/s/KpQKN" class="frame-32__questionnaire" title="填寫閱讀體驗問卷" target="_blank">填寫閱讀體驗問卷</a>

      <div class="frame-32__read-more clearfix">
        <div class="frame-32__read-more-layout">
          <div class="frame-32__read-more-label">延伸閱讀</div>
          <a href="https://udn.com/news/story/7266/3726270" class="frame-32__more clearfix" title="調查報導／塑膠袋垃圾危機 真正回收不到一成" target="_blank">
            <div class="frame-32__image clearfix">
              <img src="@/assets/images/story5/index_part5_read1.jpg" alt="延伸閱讀：調查報導／塑膠袋垃圾危機 真正回收不到一成">
            </div>
            <div class="frame-32__title">調查報導／塑膠袋垃圾危機 真正回收不到一成</div>
          </a>
          <a href="https://udn.com/news/story/7328/3774913" class="frame-32__more clearfix" title="清潔隊回收物全丟垃圾車 宜蘭市公所查辦" target="_blank">
              <div class="frame-32__image clearfix">
              <img src="@/assets/images/story5/index_part5_read2.jpg" alt="延伸閱讀：清潔隊回收物全丟垃圾車 宜蘭市公所查辦">
            </div>
            <div class="frame-32__title">清潔隊回收物全丟垃圾車 宜蘭市公所查辦</div>
          </a>
          <a href="https://udn.com/news/story/7325/3742399" class="frame-32__more clearfix" title="翻出廢帳單... 亂丟垃圾重罰6千" target="_blank">
              <div class="frame-32__image clearfix">
              <img src="@/assets/images/story5/index_part5_read3.jpg" alt="延伸閱讀：翻出廢帳單... 亂丟垃圾重罰6千">
            </div>
            <div class="frame-32__title">翻出廢帳單... 亂丟垃圾重罰6千</div>
          </a>
          <a href="https://udn.com/news/story/7314/3743420" class="frame-32__more clearfix" title="廢紙廢塑膠大量進口 監委促請主管機關改進" target="_blank">
              <div class="frame-32__image clearfix">
              <img src="@/assets/images/story5/index_part5_read4.jpg" alt="延伸閱讀：廢紙廢塑膠大量進口 監委促請主管機關改進">
            </div>
            <div class="frame-32__title">廢紙廢塑膠大量進口 監委促請主管機關改進</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame32'
}
</script>

<style lang="scss">
.frame-32 {
  // z-index: 320;
  $frame: ".frame-32";

  &__contents {
    padding-top: 10px;
    background-color: #30343f;
  }

  &__editors {
    padding: 0 45px;
    font-size: 0.9375rem;
    color: #A8A8A8;

    @include rwd($RWD_TABLET) {
      padding: 0 150px;
      line-height: 1.375rem;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 536px;
      padding: 0;
      margin: 0 auto;
    }
  }

  &__brand-links {
    position: relative;
    padding: 35px 45px 0;

    @include use-vertical-align();

    @include rwd($RWD_TABLET) {
      padding: 35px 0;
      text-align: center;
    }
  }

  &__brand-link {
    position: relative;
    display: inline-block;
    width: 40%;
    max-width: 128px;
    margin-right: 10px;
    vertical-align: middle;

    img {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    @include rwd($RWD_TABLET) {
      width: 112px;
      max-width: none;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 180px;
    }
  }

  &__questionnaire {
    display: block;
    margin: 100px auto;
    width: 250px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #f7f6f6;
    border-radius: 50px;
    border: 1px solid #f7f6f6;
    text-decoration: none;

    @include rwd($RWD_TABLET) {
      width: 200px;
      height: 60px;
      line-height: 60px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 250px;
      height: 70px;
      line-height: 70px;
      font-size: 0.9375rem;
    }
  }

  &__read-more {
    position: relative;
    padding: 0 16px 100px;

    &::before {
      content: "";
      display: block;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: #FFFFFF;
      opacity: 0.2;
    }

    @include rwd($RWD_TABLET) {
      padding: 0 85px 100px;
    }
  }

  &__read-more-label {
    padding-top: 60px;
    font-size: 1.4375rem;

    @include rwd($RWD_TABLET) {
      padding-top: 100px;
      font-size: 1.0625rem;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      text-align: left;
      padding-bottom: 20px;
    }
  }

  &__read-more-layout {
    @include rwd($RWD_TABLET) {
      padding: 0 75px 0 65px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 870px;
      padding: 0;
      margin: 0 auto;
    }
  }

    &__image {
    position: relative;
    float: right;
    width: 50%;
    padding-bottom: 35%;
    height: 0;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: auto;
      left: 0;
      top: 0;
    }

    @include rwd($RWD_TABLET) {
      float: none;
      width: auto;
      padding-bottom: 58.9%;
      margin-right: 5px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      margin: 0;
      margin-right: 10px
    }
  }

  &__more {
    display: block;
    margin-bottom: 12px;
    color: #A8A8A8;
    text-decoration: none;
    clear: both;

    @include rwd($RWD_TABLET) {
      width: 50%;
      float: left;
      clear: none;

      &#{$frame}__more:nth-child(odd) {
        &#{$frame}__image {
          margin-right: 0;
          margin-left: 5px;
        }
      }
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      width: 212px;

      #{$frame}__image {
        margin: 0;
        margin-left: 10px;
      }

      &#{$frame}__more:nth-child(1) {
        &#{$frame}__image {
          margin-left: 0;
        }
      }
    }
  }

  // &__image {
  //   position: relative;
  //   float: right;
  //   width: 50%;
  //   padding-bottom: 35%;
  //   height: 0;
  //   overflow: hidden;

  //   img {
  //     position: absolute;
  //     width: 100%;
  //     height: auto;
  //     left: 0;
  //     top: 0;
  //   }

  //   @include rwd($RWD_TABLET) {
  //     float: none;
  //     width: auto;
  //     padding-bottom: 58.9%;
  //     margin-right: 5px;
  //   }

  //   @include rwd($RWD_DESKTOP_WIDE) {
  //     margin: 0;
  //     margin-right: 10px
  //   }
  // }

  &__title {
    float: left;
    width: 50%;
    padding: 10px 20px 0 0;

    @include rwd($RWD_TABLET) {
      float: none;
      width: 100%;
      padding-bottom: 70px;
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      padding-left: 10px;
    }
  }
}
</style>

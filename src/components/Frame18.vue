<template>
  <div class="frame frame-18">
    <div class="frame-18__trigger-blackhole"
      ref="triggerBlackhole"/>

    <div ref="bhcontent" class="frame-18__contents blackhole-contents">
      <div ref="spacer" class="spacer"></div>
      <div ref="blackhole" class="frame-18__blackhole blackhole"></div>
      <div ref="content" class="frame-31__content content">
        <div ref="spacer2" class="spacer2"></div>
        <div class="frame-18__content-layout bh-content-layout">
          <div class="frame-18__blackhole-title bh-title">
            <p>黑洞二：</p>
            <p>回收商分類沒誘因</p>
          </div>
          <div class="frame-18__blackhole-content bh-content">
            <p>記者走訪桃園市、新竹縣、彰化縣、南投縣等各地回收商，發現只有規模夠大、或距離連泰及正隆兩家處理廠夠近的回收場，願意將紙類與紙容器妥善分類、分送不同地方處理。新竹縣某基層回收業者透露，多數基層回收場沒有空間、人力分類與堆放，況且對中、小盤商而言，紙類、紙容器賣給大盤商的價格差異不大，有時價差不到1元，增加人力分類不划算。</p>
            <img src="@/assets/images/story3/index_part3_article_img1.jpg" alt="紙餐盒無法順利走上回收再利用的命運，問題點在於能處理的末端厰商過少。">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame18',
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
    // .addIndicators({ name: 'blackhoe-frame18' })
  }
}
</script>

<style lang="scss">
.frame-18 {
  // z-index: 180;
  $frame: ".frame-18";

  &__trigger-blackhole {
    position: absolute;
    top: 120vh;
  }

  &__contents {}

  &__blackhole {}

  &__content {}

  &__content-layout {
    padding: 0 16px 150px;

    img {
      width: 100%;
      margin-top: 40px;
    }
  }

  &__blackhole-title {}
}
</style>

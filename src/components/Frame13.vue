<template>
  <div class="frame frame-13">
    <div class="frame-13__trigger-blackhole"
      ref="triggerBlackhole"/>

    <div ref="bhcontent" class="frame-13__contents blackhole-contents">
      <div ref="spacer" class="spacer"></div>
      <div ref="blackhole" class="frame-13__blackhole blackhole"></div>
      <div ref="content" class="frame-13__content content">
        <div ref="spacer2" class="spacer2"></div>
        <div class="frame-13__content-layout bh-content-layout">
          <div class="frame-13__blackhole-title bh-title">
            <p>黑洞一：</p>
            <p>民眾乖乖分 清運業者當垃圾丟</p>
          </div>
          <div class="frame-13__blackhole-content bh-content">
            <p>社區、大樓通常設置不同的回收箱讓民眾分類；走進速食餐廳或自助餐店，飲料杯、餐盤也都有設置區域讓民眾回收，民眾可能覺得：「我都有分啊！」但問題點不在民眾，而在處理的清運業者。</p>
            <p>從一張公文就可以清楚看到業者態度。雙北的公寓大廈出現一張公文（見下圖，讀者提供），指因紙餐盒、紙杯等內有塑膠淋膜，紙廠改變政策拒收，要住戶直接當垃圾丟棄。但事實上，餐盒、紙杯等紙容器本就不該進入紙廠，而是有專業處理廠可回收，清運業者卻積非成是、誤導民眾。</p>
            <br>
            <br>
            <img alt="回收商私下透露，對很多清運公司而言，收到的紙容器數量不像清潔隊那麼多，量太少不好賣，但堆積到大量又會產生惡臭，容易被街坊鄰居投訴，不好處理乾脆整包當垃圾。" style="width:100%;"
            src="@/assets/images/story0/index_part2_article_img1.jpg">
            <br>
            <br>
            <br>
            <p>回收商私下透露，對很多清運公司而言，收到的紙容器數量不像清潔隊那麼多，量太少不好賣，但堆積到大量又會產生惡臭，容易被街坊鄰居投訴，不好處理乾脆整包當垃圾。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame13',
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
    //   duration: '30%',
    //   triggerHook: 0
    // })
    // .addTo(this.ctrl)
    // .setPin(this.$refs.blackhole)
    // .addIndicators({ name: 'blackhoe-frame13' })
  }
}
</script>

<style lang="scss">
.frame-13 {
  $frame: ".frame-13";
  // z-index: 130;

  &__trigger-blackhole {
    position: absolute;
    top: 120vh;
  }

  &__contents {}

  &__blackhole {
  }

  &__content {
    // outline: 5px solid white;
    // z-index: 132;
  }

  &__content-layout {}

  &__blackhole-title {}

  &__blackhole-content {}
}
</style>

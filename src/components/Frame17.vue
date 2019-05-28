<template>
  <div class="frame frame-17 summary-style over-vh">
    <div class="summary-layout">
      <div class="frame-17__summary summary">
        <p>餐盒、紙杯等紙餐具2018年回收量共4萬噸，經記者詢問，環保署對於回收率並無掌握，但依造紙公會推估，回收率不會超過25％，連泰紙業更悲觀推估回收率僅10％，代表至少還有12萬噸紙餐具流落在外。</p>
        <img alt="紙容器回收量"
          src="@/assets/images/story3/index_part3_article_chart1.svg">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame17'
}
</script>

<style lang="scss">
.frame-17 {
  // z-index: 170;
  $frame: ".frame-17";

  &__summary {
    img {
      display: block;
      width: 100%;
      margin: 16px 0 26px;
    }

    @include rwd($RWD_TABLET) {
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      padding: 70px 62px 53px 88px!important;

      p {
        display: inline-block;
        width: 50%;
        padding-right: 34px;
        margin: 0;
        vertical-align: middle;
      }

      img {
        display: inline-block;
        width: 50%;
        vertical-align: middle;
        margin: 0;
      }
    }
  }
}
</style>

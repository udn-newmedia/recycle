<template>
  <div class="frame frame-17 summary-style over-vh">
    <div class="summary-layout">
      <div class="frame-17__summary summary">
        <p>經記者實地了解，兩家處理廠目前每月含鋁箔包與紙餐具處理量相加約5500噸，一年約6萬多噸，與全台各縣市每年超過10萬噸的應回收量有不小差距，其餘沒有進到這兩家的紙容器，最後都走上廢棄物的命運。</p>
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

<template>
  <div class="frame frame-22 summary-style over-vh">
    <div class="frame-22__summary-layout summary-layout"><!--
      --><div class="frame-22__summary summary">
        <p>造紙工業同業公會秘書長謝世平表示，國內一般廢紙平均收購價現約一公斤4.5元，跟紙容器的5.25元僅差0.75元，差距不夠大，應至少差2元，回收商才有誘因。</p>

        <img alt="環保署紙容器補貼機制"
          src="@/assets/images/story3/index_part3_article_chart2_m.svg">
        <img alt="環保署紙容器補貼機制"
          src="@/assets/images/story3/index_part3_article_chart2_pc.svg">
      </div><!--
    --></div>
  </div>
</template>

<script>

export default {
  name: 'Frame22'
}
</script>

<style lang="scss">
.frame-22 {
  // z-index: 220;
  $frame: ".frame-22";

  &__summary-layout {
    min-height: 100vh;
    padding: 140px 16px;
  }

  &__summary {
    position: relative;
    width: 100%;

    img {
      display: block;
      width: 100%;
      margin: 100px 0 26px;
    }

    img + img {
      display: none;
    }

    @include rwd($RWD_TABLET) {
      img {
        display: none;
      }

      img + img {
        display: inline-block;
      }
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      p {
        display: inline-block;
        margin-bottom: 60px!important;
        vertical-align: middle;
      }

      img {
        margin: 0;
        height: 295px;
      }
    }
  }
}
</style>

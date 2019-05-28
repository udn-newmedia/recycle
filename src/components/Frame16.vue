<template>
  <div class="frame frame-16 summary-style over-vh">
    <div class="summary-layout">
      <div class="frame-16__summary summary">
        <p>清運、回收業者不想收，一大原因是紙容器的專業處理廠過少，運送、囤積都會有問題，且價格不高、誘因不足。目前全台僅有兩家可將紙容器再生的處理廠，一家是位於苗栗的連泰紙業，另一家是正隆紙業竹北廠，唯有這兩家可將紙容器回收再利用成塑膠粒、紙漿。</p>
        <img alt="全台灣現只有苗栗連泰紙業和正隆紙業竹北廠可將紙容器回收再利用。"
          src="@/assets/images/story3/index_part3_article_map_m.svg">
        <img alt="全台灣現只有苗栗連泰紙業和正隆紙業竹北廠可將紙容器回收再利用。"
          src="@/assets/images/story3/index_part3_article_map_pc.svg">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame16'
}
</script>

<style lang="scss">
.frame-16 {
  // z-index: 160;
  $frame: ".frame-16";

  &__summary {
    img {
      display: block;
      width: 100%;
      margin: 16px 0 26px;
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
      padding: 47px 96px 47px 88px!important;

      p {
        display: inline-block;
        width: 50%;
        padding-right: 50px;
        margin: 0;
        vertical-align: middle;
      }

      img {
        width: 50%;
        vertical-align: middle;
        margin: 0;
      }
    }
  }
}
</style>

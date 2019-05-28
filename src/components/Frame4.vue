<template>
  <div class="frame frame-4"><!--
  --><div class="frame-4__chart">
      <img alt="台灣每年消耗50億個紙餐盒、紙杯命運好幾種，有的進了焚化爐，有的被回收場無名火燒毀，還有些進入紙廠變垃圾。"
        src="@/assets/images/story0/index_chart_m.svg">
      <img alt="台灣每年消耗50億個紙餐盒、紙杯命運好幾種，有的進了焚化爐，有的被回收場無名火燒毀，還有些進入紙廠變垃圾。"
        src="@/assets/images/story0/index_chart_pc.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame4'
}
</script>

<style lang="scss">
.frame-4 {
  // z-index: 40;
  $frame: ".frame-4";
  height: 100vh;
  background: #30343f;
  text-align: center;
  overflow: hidden;
  @include use-vertical-align();

  &__chart {
    display: inline-block;
    margin: 0 20px;
    vertical-align: middle;

    img {
      display: inline-block;
      width: 100%;
    }

    img:first-child {
      display: inline-block;
    }

    img:first-child + img {
      display: none;
    }

    @include rwd($RWD_TABLET) {
      img:first-child {
        display: none;
      }

      img:first-child + img {
        display: inline-block;
      }
    }

    @include rwd($RWD_DESKTOP_WIDE) {
      margin: 0 auto;
      width: 700px;
    }
  }

  // &__chart {
  //   position: relative;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   text-align: center;
  //   @include use-vertical-align();

  //   img {
  //     display: inline-block;
  //     max-width: 100%;
  //     vertical-align: middle;
  //   }
  // }
}
</style>

<template>
  <div class="frame frame-26 summary-style">
    <div class="summary-layout">
      <div class="frame-26__summary summary">
        <p>沒地方去的紙餐盒們，回收業界心知肚明，許多回收場莫名起火並非意外，都是在焚燒回收物、規避送焚化爐需支出的費用，有業者更直言：「這不是大家都知道的事嗎？」經記者統計，2019年1到4月間全台已發生近10起回收場失火「意外」，成為空汙的不定時炸彈。（相關新聞：<a href="https://udn.com/news/story/7325/3709456" title="" target="_blank">廢棄物場1個月2起大火 彰縣府列重要安檢對象</a>）</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Frame26'
}
</script>

<style lang="scss">
.frame-26 {
  // z-index: 260;
  $frame: ".frame-26";

  &__summary {
    p {
      margin: 0!important;
    }

    a {
      color: #095bff;

      &:hover {
        color: #FFFFFF;
        background-color: #095bff;
        transition: background-color 0.3s linear, color 0.3s linear;
        text-decoration: none;
      }
    }
  }
}
</style>

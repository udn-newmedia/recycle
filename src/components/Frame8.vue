<template>
  <div class="frame frame-8 summary-style over-vh">
    <div class="frame-8__overlay"></div>
    <div class="summary-layout">
      <div class="frame-8__summary summary">
        <p>清潔隊收到民眾丟上來的回收物後，賣給回收商的方式各地不同。以彰化縣為例，多數鄉鎮將一般紙類與餐盒等紙容器混合，再統一以紙類價格賣給回收商，由回收商自行分類處理；另也有些鄉鎮是由清潔隊先分類後以不同價格賣出。</p>
        <p>但更多縣市沒有這麼大的腹地和人力可以在清潔隊就精細分類。例如台北市，資源回收物收回來後全數混在一起，整批回收物統一送到外縣市，再由外縣市回收商分類。桃園市做法則是將資源回收物集中運至平鎮區的享運細分類廠，由分類廠分類後再販售給下游回收商。</p>
        <p>當第一線清潔隊的分類能力有限，紙餐盒能否走上回收的命運，端看回收業者怎麼做。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame8'
}
</script>

<style lang="scss">
.frame-8 {
  // z-index: 80;
  $frame: ".frame-8";

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(0, 0, 0, 0.66);
  }
}
</style>

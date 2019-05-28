<template>
  <div class="frame frame-3">
    <div class="frame-3__youtube">
      <iframe width="100%" height="100%" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        src="https://www.youtube.com/embed/SomopueUEa0?rel=0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Frame3'
}
</script>

<style lang="scss">
.frame-3 {
  // z-index: 30;
  $frame: ".frame-3";
  height: 100vh;
  background: black;
  @include use-vertical-align();

  &__youtube {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    vertical-align: middle;

    iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>

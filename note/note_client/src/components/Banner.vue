<template>
  <div>
    <div class="banner-wrap">
      <img src="/static/img/index.jpg">
      <div class="desc">
        十三亿人都在玩的劲爽游戏
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner"
};
</script>

<style scoped lang="scss">
.banner-wrap {
  position: relative;
  width: 750px;
  border-radius: 4px;
  overflow: hidden;
  img {
    display: block;
    width: 750px;
  }
  .desc {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    line-height: 50px;
    padding-left: 30px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
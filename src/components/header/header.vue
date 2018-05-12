<template>
  <div class="header">
    <div class="icon"></div>
    <div class="banner">电影大数据分析平台</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    width: 1298px
    position: relative
    height: 106px
    text-align: center
    color: black
    font-size: 0
    // background-image :url('../../../static/images/banner.png')
    background-repeat: no-repeat;
    background: #0098E1;
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .banner
      font-size: 52px;
      font-weight: bold;
      color: white;
      text-align: left;
      margin-left: 106px;
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: 16px
</style>

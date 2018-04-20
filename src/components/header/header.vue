<template>
  <div class="header">
    <div class="icon"></div>
    <div class="banner"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position: relative
    height: 106px
    text-align: center
    color: black
    font-size: 0
    background-image :url('../../../static/images/banner.png')
    background-repeat: no-repeat;
    background-color: #1e2d35;
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: 16px
</style>

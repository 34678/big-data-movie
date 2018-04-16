<template>
  <div class="header">
    <div class="icon"></div>
    <h1 class="text">XX平台</h1>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position: relative
    height: 44px
    text-align: center
    color: black
    font-size: 0
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

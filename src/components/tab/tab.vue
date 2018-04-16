<template>
  <div class="main-nav tab">
    <router-link tag="div" class="tab__item" to="/Data">
      <span class="tab-link">数据概览</span>
    </router-link>
    <router-link tag="div" class="tab__item" to="/ScoreAnalysis">
      <span class="tab-link" ref="tabpingfen">评分分析</span>
    </router-link>
    <div class="tab__wrapper" ref="tabwrapper">
      <router-link tag="div" class="tab__item-sub" to="/ScoreAnalysis/Myarea">地区分析</router-link>
      <router-link tag="div" class="tab__item-sub" to="/ScoreAnalysis/Mytype">类型分析</router-link>
      <router-link tag="div" class="tab__item-sub" to="/ScoreAnalysis/Language">语言分析</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$refs.tabpingfen.on('click', function () {
        this.$refs.tabwrapper.style.display = 'block';
        console.log(1);
        })
      }
    }
  }
</script>
<style>
  .tab__item {
    position: relative;
    z-index: 0;
    color: #bad2e1;
    height: 50px;
    line-height: 50px;
    background: #4b5868;
  }

  .tab__item.router-link-active {
    background: #384453;
  }

  .tab__wrapper {
    display: none;
  }

  .tab__item-sub {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #a8bec9;
    padding-left: 44px;
    background: #384453;
  }

  .tab__item-sub.router-link-active {
    color: #fff;
    text-decoration: none;
  }
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    flex-direction: column
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>

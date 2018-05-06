<template>
  <div class="main-nav tab">
    <router-link tag="div" v-on:click.native="hide" class="tab__item" to="/Data">
      <span class="tab-link">数据概览</span>
    </router-link>
    <router-link tag="div" v-on:click.native="hide" class="tab__item" to="/Detail">
      <span class="tab-link">详情页</span>
    </router-link>
    <router-link tag="div"  v-on:click.native="show" class="tab__item" to="/ScoreAnalysis">
      <span class="tab-link" >评分分析</span>
    </router-link>
    <div class="tab__wrapper" ref="tab__wrapper" >
      <router-link tag="div" class="tab__item-sub" to="/ScoreAnalysis/Myarea">地区分析</router-link>
      <router-link tag="div" class="tab__item-sub" to="/ScoreAnalysis/Mytype">类型分析</router-link>
      <router-link tag="div" class="tab__item-sub" to="/ScoreAnalysis/Language">语言分析</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      counter: 0
    };
  },
  created() {},
  methods: {
    show: function() {
      this.$refs.tab__wrapper.style.display = "block";
      // debugger;
    },
    hide: function() {
      this.$refs.tab__wrapper.style.display = "none";
    }
  }
};
</script>
<style>
.tab__item {
    position: relative;
    z-index: 0;
    color: #bad2e1;
    height: 36px;
    font-weight: bolder;
    font-size: 22px;
    line-height: 50px;
    background: #4b5868;
    padding: 9px;
}

.tab__item.router-link-active {
  background: #384453;
}

.tab__wrapper {
  display: none;
}
.tab__wrapper-data {
  display: none;
}

.tab__item-sub {
    padding: 0px;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #a8bec9;
    padding-left: 81px;
    background: #384453;
    height: 67px;
    font-weight: bolder;
    font-size: 22px;
}

.tab__item-sub.router-link-active {
  color: #fff;
  text-decoration: none;
}
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
.tab {
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color: #4b5868;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: $color-text-l;
    }

    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>

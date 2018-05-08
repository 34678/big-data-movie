<template>
<div id="wrapper">
  <another-tab :active1=true></another-tab>
  <div id="chart"></div>
</div>
</template>

<script>
import anotherTab from '../tab/anotherTab.vue'
export default {
  data(){
    return {
      option : {
          title: {
              text: '电影时长与评分关系',
              subtext: '纯属虚构'
          },
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      }
    }
  },
  mounted() {
    this.__init();
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(
        document.getElementById("chart")
      );
      myChart.setOption(this.option);
    }
  },
  components: {
      anotherTab
  }
}
</script>

<style scoped>
#chart{
    height: 607px!important;
    width: 800px;
    margin: 0 auto;
}
</style>

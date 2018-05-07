<template>
<div id="wrapper">
    <another-tab></another-tab>
  <selector></selector>
  <div id="chart"></div>
</div>
</template>

<script>
import anotherTab from '../tab/anotherTab.vue'
import selector from '../base/select.vue'
export default {
  data(){
    return {
      option : {
          title : {
              text: '地区对电影类型的喜好',
              subtext: '纯属虚构'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['电影数量']
          },
          toolbox: {
              show : true,
              feature : {
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'电影数量',
                  type:'bar',
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              }
          ]
      }
    }},
  components: {
    anotherTab,
      selector
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
  }
}
</script>

<style scoped>
#chart{
    height: 607px!important;
    width: 800px;
    margin: 0 auto;
        margin-top: 50px;
}
</style>

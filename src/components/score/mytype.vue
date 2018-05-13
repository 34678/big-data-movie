<template>
<div id="wrapper">
  <another-tab :active4=true></another-tab>
  <!-- <selector></selector> -->
    <select id="type">
      <option>类型</option>
      <option>地区</option>
    </select>
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
          title: {
              text: '电影类型/地区与数量关系',
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
      anotherTab,
      selector
  }
}
</script>

<style scoped>
#chart{
    height: 607px!important;
    width: 800px;
    margin: 0 auto;
}
select{
    float: left;
    margin-left: 173px;
    height: 36px;
}
</style>

<template>
<div id="wrapper">
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
              subtext: '豆瓣大数据'
          },
          xAxis:
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                name:'时长',
                axisLabel:{  
                interval: 19
                },  
            }, 
          yAxis: 
          {
              type: 'value',
              name : '评分',
              min: 5
            
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
    this.reqTime();
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(
        document.getElementById("chart")
      );
      myChart.setOption(this.option);
    },
    reqTime(){
         var vm = this;
        this.$http.get('http://193.112.138.190:666/getTimeVSRank', {
        params: {
        }
        })
        .then(function (response) {
            var arr = response.data.data;
            /* console.log(arr); */
            var x = [];
            var y = [];
            var tmpx = [];
            var tmpy = [];
            var count = 1;
            var countshowing_time =0;
            // 30个一组取平均值
            for(var n in arr){
           
            x.push(arr[n].showing_time);
            y.push(arr[n].evaluation_scope);
                 
 
            }
            vm.option.xAxis.data = x;
            vm.option.series[0].data = y;
            //重新渲染echrts
            var myChart = vm.$echarts.init(
            document.getElementById("chart")
            );
            myChart.setOption(vm.option);

        /* console.log(arr); */
        })
        .catch(function (response) {
        //错误处理 比如出现一个蒙层显示网络错误
        console.log(response);
        });
    }
  },
  components: {
      anotherTab
  }
}
</script>

<style scoped>
#wrapper{
      overflow: scroll;
      width: 1024px!important;
          margin-top: 20px;
}
#chart{
    width: 1000px!important;
    height: 599px!important;
    margin: 0 auto;
    margin-top: 53px;
}
::-webkit-scrollbar {
width: 1px;
height: 1px;
}
 
</style>

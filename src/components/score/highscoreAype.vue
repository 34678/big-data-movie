<template>
<div id="wrapper">
 
 
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
                text: '高分电影地区分析',
                subtext: '豆瓣大数据',
                left:'50px'
            },
            tooltip : {
                trigger: 'item',
                
                
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: {},

                selected: {}
            },
            series : [
                {
                    name: '地区',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: {},
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        },
      current:'地区'
    }},
  components: {
 
  },
    mounted() {
     
    this.reqArea();
    this.__init();
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(
        document.getElementById("chart")
      );
      myChart.setOption(this.option);
      //监听select的change事件
     /*  console.log(this.$('type').change) */
     var vm = this;
 
    },
    reqArea(){
        var vm = this;
        this.$http.get('http://193.112.138.190:666/getRegionVSRank', {
        params: {
        }
        })
        .then(function (response) {
            var arr = response.data.data;
            /* console.log(arr); */
            var data1 = [];
            var data2 = {};
            var data3 = [];
            var count = 0;
            for(var n in arr){
                data1.push({
                    'name':arr[n].produce_place,
                    'value' : arr[n].count
                });
                if(count < 10){
                    data2[arr[n].produce_place] = true;
                }else{
                    data2[arr[n].produce_place] = false;
                    
                }
                count++;
                data3.push(arr[n].produce_place);
            }
        //重新渲染echrts
            var myChart = vm.$echarts.init(
            document.getElementById("chart")
            );
            vm.option.series[0].data = data1;
            vm.option.legend. selected = data2;
            vm.option.legend.data = data3;
            myChart.setOption(vm.option);
        }).catch(function (response) {
            //错误处理 比如出现一个蒙层显示网络错误
            console.log(response);
        });
    },
 
  }
}
</script>

<style scoped>
#wrapper{
    width: 1078px!important;
}
select{
    float: left;
    margin-left: 173px;
    height: 36px;
}
#chart{
        height: 605px!important;
    overflow: scroll;
        margin: 0px;
    margin-top: 75px;
    width: 959px;
}
::-webkit-scrollbar {
width: 1px;
height: 1px;
}
</style>

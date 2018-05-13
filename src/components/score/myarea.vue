<template>
<div id="wrapper">
    <another-tab :active3=true></another-tab>
  <!-- <selector></selector> -->
  <select id="type">
      <option>地区</option>
      <option>电影类型</option>
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
          title : {
              text: '对电影类型的喜好',
              subtext: '豆瓣大数据'
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
                type : 'value',
            }
          ],
          yAxis : [
             {
                  type : 'category',
                  data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLabel:{  
                        interval: 0  
                    },  
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
      },
      current:'地区'
    }},
  components: {
    anotherTab,
      selector
  },
    mounted() {
    this.option.title.text = this.current + "对电影类型的喜好";
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
      this.$('#type').change(function(){ 
        var obj = document.getElementsByTagName("select")[0];
        vm.current = obj.options[obj.selectedIndex].value;
        //拿到更新的数据之后重新渲染
        vm.option.title.text = vm.current + "对电影类型的喜好";
        var myChart = vm.$echarts.init(
        document.getElementById("chart")
       );
       myChart.setOption(vm.option);
       //请求当前类型的数据
       if(vm.current == '地区'){
        vm.reqArea();
       }else{
        vm.reqType();
       }
      });
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
        var x = [];
        var y = [];
        for(var n in arr){
            y.push(arr[n].produce_place);
            x.push(arr[n].count);
        }
        vm.option.yAxis[0].data = y;
        vm.option.series[0].data = x;
        //重新渲染echrts
        var myChart = vm.$echarts.init(
        document.getElementById("chart")
         );
         myChart.setOption(vm.option);
/*         console.log('2' ,vm.option.yAxis[0].data)
        console.log('2' ,vm.option.series[0].data) */
        })
        .catch(function (response) {
        //错误处理 比如出现一个蒙层显示网络错误
        console.log(response);
        });
    },
    reqType(){
         var vm = this;
        this.$http.get('http://193.112.138.190:666/getTypeVSRank', {
        params: {
        }
        })
        .then(function (response) {
            var arr = response.data.data;
            /* console.log(arr); */
            var x = [];
            var y = [];
            for(var n in arr){
                y.push(arr[n].movie_type);
                x.push(arr[n].count);
            }
            vm.option.yAxis[0].data = y;
            vm.option.series[0].data = x;
            //重新渲染echrts
            var myChart = vm.$echarts.init(
            document.getElementById("chart")
            );
            myChart.setOption(vm.option);

        //console.log(arr);
        })
        .catch(function (response) {
        //错误处理 比如出现一个蒙层显示网络错误
        console.log(response);
        });
    },
  }
}
</script>

<style scoped>
select{
    float: left;
    margin-left: 173px;
    height: 36px;
}
#chart{
    height: 1200px!important;
    width: 800px;
    margin: 0 auto;
        margin-top: 50px;
}
</style>

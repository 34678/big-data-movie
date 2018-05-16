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
                text: 'area分析',
                subtext: '豆瓣大数据',
                x:'center'
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
    reqType(){
          var vm = this;
        this.$http.get('http://193.112.138.190:666/getTypeVSRank', {
        params: {
        }
        })
        .then(function (response) {
            var arr = response.data.data;
            var data1 = [];
            var data2 = {};
            var data3 = [];
            var count = 0;           
            for(var n in arr){
                data1.push({
                    'name':arr[n].movie_type,
                    'value' : arr[n].count
                });
                if(count < 10){
                    data2[arr[n].movie_type] = true;
                }else{
                    data2[arr[n].movie_type] = false;
                    
                }
                count++;
                data3.push(arr[n].movie_type);
            }
            //重新渲染echrts
            var myChart = vm.$echarts.init(
            document.getElementById("chart")
            );
            vm.option.series[0].data = data1;
            vm.option.legend. selected = data2;
            vm.option.legend.data = data3;
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

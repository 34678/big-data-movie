<template>
<div id="wrapper">
  <!-- <selector></selector> -->
  <select id="type" style="visibility:hidden"></select>
  <div id="chart"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        legend: {
          data: ["评分", "数量"]
        },
        calculable : true,
        title: {
          text: "电影地区的年度增长趋势",
          subtext: "豆瓣大数据"
        },
        tooltip: {
          trigger: "axis",
          formatter: " {c0}"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          name: "年份",
          axisLabel: {
               /* interval: 0 */
          }
        },
        yAxis: [
          {
            type: "value",
            name: "评分"
          },
          {
            type: "value",
            name: "数量"
          }
        ],
        series: [
          {
              name:'评分',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          },
          {
               name:'数量',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar",
            barWidth : 8,
          }
        ]
      },
      current: "类型",
      tmp: {},
      tmp2: {},
      tmp3:{},
    };
  },
  mounted() {
    this.__init();
    this.reqArea();
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(document.getElementById("chart"));
      myChart.setOption(this.option);
      //监听select的change事件
      /*  console.log(this.$('type').change) */
      var vm = this;
    },
    reqArea(){
        var vm = this;
      // 如果有之前的select就删除
      if(vm.$('#type2').length !== 0 ){
        vm.$('#type2').remove();
      }
        this.$http.all([
        this.$http.get('http://193.112.138.190:666/getRegionYearAnalysic'),
        this.$http.get('http://193.112.138.190:666/getRegionVSEvaluation')
        ])
        .then(this.$http.spread(function (response, score) {
            //对数量数据的处理
            var arr = response.data.data;
            var arranother = score.data.data;
            // 存储所有地区变化的临时数据
            vm.tmp = arr;
            vm.tmp3 = arranother;
            var res = [];
            for(var n in arr){
              res.push(arr[n].region);
            }
            // 根据地区名称下来框
            if(vm.$('#area').length == 0 ){
              var text = '<select id="area" style="     border-radius: 10px;margin-top: 7px;   float: right;margin-right: 173px;height: 36px;">'
              for(var n in res){
                text += "<option>"+ res[n] + "</option>";
              }
              text += "</select>";
              vm.$('#type').after(vm.$(text));
            }
            var tmpArr = vm.tmp[0].result.split(';');
            var tmpArr2 = vm.tmp3[0].result.split(';');
            var arr1=[],
                arr2=[],
                arr3=[];
            for(var n in tmpArr){
              var newTable = tmpArr[n].split('-');
              arr1.push(newTable[0]);
              arr2.push(newTable[1]);
            }
            for(var n in tmpArr2){
                var newTable2 = tmpArr2[n].split('-');
                arr3.push(Number(newTable2[1]));
            }
            vm.$('#area').change(function(){
              var obj = document.getElementsByTagName("select")[1];
              var area = obj.options[obj.selectedIndex].value;
              // 从temp里面找到相关数据并且显示
              for(var n in vm.tmp){
                if(vm.tmp[n].region == area){
                    var tmpArr = vm.tmp[n].result.split(';');
                    var arr1=[],
                        arr2=[];
                    for(var n in tmpArr){
                      var newTable = tmpArr[n].split('-');
                      arr1.push(newTable[0]);
                      arr2.push(newTable[1]);
                    }
                    for(var n in vm.tmp3){
                        if(vm.tmp3[n].region == area){
                            var tmpArr2 = vm.tmp3[0].result.split(';');
                            var arr3=[];
                            for(var n in tmpArr2){
                                var newTable2 = tmpArr2[n].split('-');
                                arr3.push(Number(newTable2[1]));
                            }
                        }
                    }
                    //重新渲染echrts
                    var myChart = vm.$echarts.init(
                    document.getElementById("chart")
                    );
                    console.log('arr3',arr3)
                    vm.option.xAxis.data = arr1;
                    vm.option.series[0].data = arr3;
                     vm.option.series[1].data = arr2;
                    myChart.setOption(vm.option);  
                }
              }

            })
            //重新渲染echrts
            var myChart = vm.$echarts.init(
            document.getElementById("chart")
            );
            vm.option.xAxis.data = arr1;
            vm.option.series[0].data = arr3;
            console.log('arr3',arr3)
            vm.option.series[1].data = arr2;
            myChart.setOption(vm.option);
        }));
/*         this.$http.get('http://193.112.138.190:666/getRegionYearAnalysic')
        .then(function (response) {
            var arr = response.data.data;
            // 存储所有地区变化的临时数据
            vm.tmp = arr;
            var res = [];
            for(var n in arr){
              res.push(arr[n].region);
            }
            // 根据地区名称下来框
            if(vm.$('#area').length == 0 ){
              var text = '<select id="area" style="    float: right;margin-right: 173px;height: 36px;">'
              for(var n in res){
                text += "<option>"+ res[n] + "</option>";
              }
              text += "</select>";
              vm.$('#type').after(vm.$(text));
            }
            var tmpArr = vm.tmp[0].result.split(';');
            var arr1=[],
                arr2=[];
            for(var n in tmpArr){
              var newTable = tmpArr[n].split('-');
              arr1.push(newTable[0]);
              arr2.push(newTable[1]);
            }
            vm.$('#area').change(function(){
              var obj = document.getElementsByTagName("select")[1];
              var area = obj.options[obj.selectedIndex].value;
              // 从temp里面找到相关数据并且显示
              for(var n in vm.tmp){
                if(vm.tmp[n].region == area){
                    var tmpArr = vm.tmp[n].result.split(';');
                    var arr1=[],
                        arr2=[];
                    for(var n in tmpArr){
                      var newTable = tmpArr[n].split('-');
                      arr1.push(newTable[0]);
                      arr2.push(newTable[1]);
                    }
                    //重新渲染echrts
                    var myChart = vm.$echarts.init(
                    document.getElementById("chart")
                    );
                    vm.option.xAxis.data = arr1;
                    vm.option.series[0].data = arr2;
                     vm.option.series[1].data = arr2;
                    myChart.setOption(vm.option);  
                }
              }

            })
            //重新渲染echrts
            var myChart = vm.$echarts.init(
            document.getElementById("chart")
            );
            vm.option.xAxis.data = arr1;
            vm.option.series[0].data = arr2;
            vm.option.series[1].data = arr2;
            myChart.setOption(vm.option);
        }).catch(function (response) {
            //错误处理 比如出现一个蒙层显示网络错误
            console.log(response);
        }); */
    },
  }
};
</script>

<style scoped>
#chart {
  height: 607px !important;
  width: 1000px;
  margin: 0 auto;
      top: 33px;
}
select {
  float: left;
  margin-left: 173px;
  height: 36px;
}
</style>

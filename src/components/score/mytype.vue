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
              subtext: '豆瓣大数据'
          },
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              name:'类型',
              axisLabel:{  
                interval: 0  
              },  
            
          },
          yAxis: 
          {
              type: 'value',
              name : '数量'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      },
      current:'类型',
      tmp : {},
      tmp2 :{}
    }
  },
  mounted() {
    this.option.title.text = this.current + "近年来的增长变化";
    this.__init();
    this.reqtype();
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
      vm.option.title.text = vm.current + "近年来的增长变化";
      var myChart = vm.$echarts.init(
      document.getElementById("chart")
      );
      myChart.setOption(vm.option);
      //请求当前类型的数据
      if(vm.current == '地区'){
      vm.reqArea();
      }else{
      vm.reqtype();
      }
      });
    },
    reqArea(){
        var vm = this;
      // 如果有之前的select就删除
      if(vm.$('#type2').length !== 0 ){
        vm.$('#type2').remove();
      }
        this.$http.get('http://193.112.138.190:666/getRegionYearAnalysic')
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
            myChart.setOption(vm.option);
        }).catch(function (response) {
            //错误处理 比如出现一个蒙层显示网络错误
            console.log(response);
        });
    },
    reqtype(){
      var vm = this;
      // 如果有之前的select就删除
      if(vm.$('#area').length !== 0 ){
        vm.$('#area').remove();
      }
        this.$http.get('http://193.112.138.190:666/getTypeYearAnalysic')
        .then(function (response) {
            var arr = response.data.data;
            // 存储所有地区变化的临时数据
            vm.tmp2 = arr;
            var res = [];
            for(var n in arr){
              res.push(arr[n].type);
            }
            // 根据地区名称下来框
            if(vm.$('#type2').length == 0 ){
              var text = '<select id="type2" style="    float: right;margin-right: 173px;height: 36px;">'
              for(var n in res){
                text += "<option>"+ res[n] + "</option>";
              }
              text += "</select>";
              vm.$('#type').after(vm.$(text));
            }
            var tmpArr = vm.tmp2[0].result.split(';');
            var arr1=[],
                arr2=[];
            for(var n in tmpArr){
              var newTable = tmpArr[n].split('-');
              arr1.push(newTable[0]);
              arr2.push(newTable[1]);
            }
            vm.$('#type2').change(function(){
              var obj = document.getElementsByTagName("select")[1];
              var type = obj.options[obj.selectedIndex].value;
              // 从temp里面找到相关数据并且显示
              for(var n in vm.tmp2){
                if(vm.tmp2[n].type == type){
                    var tmpArr = vm.tmp2[n].result.split(';');
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
            myChart.setOption(vm.option);
        }).catch(function (response) {
            //错误处理 比如出现一个蒙层显示网络错误
            console.log(response);
        });
    },
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
    width: 1300px;
    margin: 0 auto;
}
select{
    float: left;
    margin-left: 173px;
    height: 36px;
}
</style>

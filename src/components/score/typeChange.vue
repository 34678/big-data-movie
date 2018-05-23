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
        title: {
          text: "电影类型的年度增长趋势",
          subtext: "豆瓣大数据"
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          name: "年份",
          axisLabel: {
            /*    interval: 0   */
          }
        },
        yAxis: [
          {
            type: "value",
            name: "数量"
          },
          {
            type: "value",
            name: "评分"
          }
        ],
        series: [
          {
              name:'数量',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          },
          {
               name:'评分',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar"
          }
        ]
      },
      current: "类型",
      tmp: {},
      tmp2: {}
    };
  },
  mounted() {
    this.__init();
    this.reqtype();
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(document.getElementById("chart"));
      myChart.setOption(this.option);
      //监听select的change事件
      /*  console.log(this.$('type').change) */
      var vm = this;
    },
    reqtype() {
      var vm = this;
      // 如果有之前的select就删除
      if (vm.$("#area").length !== 0) {
        vm.$("#area").remove();
      }
      this.$http
        .get("http://193.112.138.190:666/getTypeYearAnalysic")
        .then(function(response) {
          var arr = response.data.data;
          // 存储所有地区变化的临时数据
          vm.tmp2 = arr;
          var res = [];
          for (var n in arr) {
            res.push(arr[n].type);
          }
          // 根据地区名称下来框
          if (vm.$("#type2").length == 0) {
            var text =
              '<select id="type2" style="     border-radius: 10px;margin-top: 7px;    float: right;margin-right: 173px;height: 36px;">';
            for (var n in res) {
              text += "<option>" + res[n] + "</option>";
            }
            text += "</select>";
            vm.$("#type").after(vm.$(text));
          }
          var tmpArr = vm.tmp2[0].result.split(";");
          var arr1 = [],
            arr2 = [];
          for (var n in tmpArr) {
            var newTable = tmpArr[n].split("-");
            arr1.push(newTable[0]);
            arr2.push(newTable[1]);
          }
          vm.$("#type2").change(function() {
            var obj = document.getElementsByTagName("select")[1];
            var type = obj.options[obj.selectedIndex].value;
            // 从temp里面找到相关数据并且显示
            for (var n in vm.tmp2) {
              if (vm.tmp2[n].type == type) {
                var tmpArr = vm.tmp2[n].result.split(";");
                var arr1 = [],
                  arr2 = [];
                for (var n in tmpArr) {
                  var newTable = tmpArr[n].split("-");
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
          });
          //重新渲染echrts
          var myChart = vm.$echarts.init(document.getElementById("chart"));
          vm.option.xAxis.data = arr1;
          vm.option.series[0].data = arr2;
          vm.option.series[1].data = arr2;
          myChart.setOption(vm.option);
        })
        .catch(function(response) {
          //错误处理 比如出现一个蒙层显示网络错误
          console.log(response);
        });
    }
  }
};
</script>

<style scoped>
#chart {
  height: 607px !important;
  width: 1000px;
  margin: 0 auto;
}
select {
  float: left;
  margin-left: 173px;
  height: 36px;
}
</style>

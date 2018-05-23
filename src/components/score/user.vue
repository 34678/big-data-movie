<template>
<div id="wrapper">
  <div id="chart"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "不同地区用户对不同类型电影的喜好",
          subtext: "豆瓣大数据"
        },
        tooltip: {
          trigger: "axis",
          formatter: " {c0}"
        },
        xAxis: {
          type: "category",
          name: "地区"
        },
        yAxis: {
          type: "category",
          name: "类型"
        },
        series: [
          {
            symbolSize: 50,
            data: [
              [10.0, 8.04],
              [8.0, 6.95],
              [13.0, 7.58],
              [9.0, 8.81],
              [11.0, 8.33],
              [14.0, 9.96],
              [6.0, 7.24],
              [4.0, 4.26],
              [12.0, 10.84],
              [7.0, 4.82],
              [5.0, 5.68]
            ],
            type: "scatter",
            itemStyle: {
              normal: {
                color: "#2ec7c9"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.__init();
    this.reqUser();
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(document.getElementById("chart"));
      myChart.setOption(this.option);
    },
    reqUser() {
      var vm = this;
      this.$http
        .get("http://193.112.138.190:666/getRegionVSType", {
          params: {}
        })
        .then(function(response) {
          var arr = response.data.data;
          /* console.log(arr); */
          var res = [];

          // 30个一组取平均值
          for (var n in arr) {
            var tmp = [];
            tmp.push(arr[n].region);
            tmp.push(arr[n].movie_type);

            res.push(tmp);
          }
          vm.option.series[0].data = res;
          //重新渲染echrts
          var myChart = vm.$echarts.init(document.getElementById("chart"));
          myChart.setOption(vm.option);

          /* console.log(arr); */
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
#wrapper {
  overflow: scroll;
  width: 1024px !important;
}
#chart {
  width: 1000px !important;
  height: 745px !important;
  margin: 0 auto;
      margin-top: 89px;
}
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
</style>
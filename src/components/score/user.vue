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
         type:'map',
                            data: [
                        {
                            name: '广东',
                            value: Math.round(Math.random() * 1000),
                            itemStyle: {
                                normal: {
                                    color: '#32cd32',
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 15
                                        }
                                    }
                                },
                                emphasis: { // 也是选中样式
                                    borderWidth: 5,
                                    borderColor: 'yellow',
                                    color: '#cd5c5c',
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: 'blue'
                                        }
                                    }
                                }
                            }
                }
            ],
      }
    };
  },
  mounted() {
    this.__init();
    /* this.reqUser(); */
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
<template>
  <div id="wrapper">
    <div id="container">
    <div class="mian_left">
      <h1>2018-5全国票房统计</h1>
      <div id="divScreenCanvas"></div>
    </div>
    <div class="mian_center mian_left">
      <h1>豆瓣评分top250</h1>
      <div>
        <table>
          <tbody>
              <tr>
                  <td style=" font-weight:bold; color:#000000">上映日期</td>
                  <td style="font-weight: bold; color: #000000; ">影片名称</td>
                  <td style=" font-weight: bold; color: #000000; ">影片类别</td>
                  <td style=" font-weight: bold; color: #000000; ">地区</td>
                  <td style=" font-weight: bold; color: #000000; ">电影排名</td>
              </tr>
              <tr v-for="item in top" onclick="gotom(this.id)" class="trtop">
                  <td>{{item.release_date}}</td>
                  <td>{{item.movie_name}}</td>
                  <td>{{item.type}}</td>
                  <td>{{item.region}}</td>
                  <td>{{item.movie_id}}</td>
              </tr>
          </tbody>
        </table>
          <div class="container large">
            <div class="pagination">
              <ul>
                <li v-for="n in totalPage">
                  <a>{{n}}</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
    </div>
    <div class="mian_right">
      <h1>网站信息</h1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          x: "center",
          data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "直接访问1",
            "邮件营销2",
            "联盟广告3",
            "视频广告4",
            "搜索引擎"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "0",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 335, name: "直接访问1" },
              { value: 310, name: "邮件营销2" },
              { value: 234, name: "联盟广告3" },
              { value: 135, name: "视频广告4" }
            ]
          }
        ]
      },
      page: 1,
      totalPage: 17,
      top :{}
    };
  },
  created() {},
  mounted() {
    var vm = this;
    this.__init();
    this.$http.get('http://172.21.231.224:666/getMovie?page=1', {
    params: {
    }
    })
    .then(function (response) {
      var arr = response.data.data["电影列表"];
      vm.top = arr ;

      //console.log(arr);
    })
    .catch(function (response) {
      //错误处理 比如出现一个蒙层显示网络错误
      console.log(response);
    });
  },
  methods: {
    __init() {
      var myChart = this.$echarts.init(
        document.getElementById("divScreenCanvas")
      );
      myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
#container {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.mian_left {
  width: 268px;
  border: 1px solid #dadada;
  float: left;
  text-align: center;
  height: 602px;
}
.mian_left h1 {
  color: #109bee;
  font-size: 16px;
  font-weight: bold;
  width: 86%;
  height: 40px;
  line-height: 40px;
  margin-left: 12px;
  border-bottom: 1px solid #dadada;
  padding-left: 12px;
  text-align: left;
}
.mian_right h1 {
  color: #109bee;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  margin-left: 12px;
  margin-right: 12px;
  border-bottom: 1px solid #dadada;
  padding-left: 12px;
  text-align: left;
}
#divScreenCanvas {
  width: 260px;
  height: 532px;
  background-color: rgba(0, 0, 0, 0);
}
.mian_center {
  width: 536px;
  border: 1px solid #dadada;
  float: left;
  margin-left: 28px;
  height: 602px;
      overflow: scroll;
}
.mian_center table {
  margin-left: 25px;
  text-align: center;
  width: 90%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.mian_center table tr {
  border-bottom: 1px dashed #dadada;
  height: 40px;
  line-height: 42px;
  color: #333;
  font-size: 14px;
}
.mian_center table tr td {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 119px;
  overflow: hidden;
}
.mian_right {
    width: 149px;
    border: 1px solid #dadada;
    float: right;
    height: 602px;
    background: #8080801c;
}
/* 分页样式 */
.container {
  background: #fdfdfd;
  padding: 1rem;
  margin: 3rem auto;
  border-radius: 0.2rem;
  counter-reset: pagination;
  text-align: center;
}
.container:after {
  clear: both;
  content: "";
  display: table;
}
.container ul {
  width: 100%;
}

.large {
 /*  width: 45rem; */
}

.pagination ul,
li {
  list-style: none;
  display: inline;
  padding-left: 0px;
}

.pagination li {
  counter-increment: pagination;
}
.pagination li:hover a {
  color: #fdfdfd;
  background-color:  #2c9ef3;
  border: solid 1px  #2c9ef3;
}
.pagination li.active a {
  color: #fdfdfd;
  background-color: #2c9ef3;
  border: solid 1px #2c9ef3;
}

.pagination li:first-child a:after {
  content: "<";
}

.pagination li:nth-child(2) {
  counter-reset: pagination;
}

.pagination li:last-child a:after {
  content: ">";
}
.pagination li a {
  border: solid 1px #d6d6d6;
  border-radius: 0.2rem;
  color: #7d7d7d;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  padding: 0.5rem 0.9rem;
}
.pagination li a:after {
  /* content: " " counter(pagination) " "; */
}

.large li a {
  display: none;
}
.large li:first-child a {
  display: inline-block;
}
.large li:first-child a:after {
  content: "<";
}
.large li:nth-child(2) a {
  display: inline-block;
}
.large li:nth-child(3) a {
  display: inline-block;
}
.large li:nth-child(4) a {
  display: inline-block;
}
.large li:nth-child(5) a {
  display: inline-block;
}
/* .large li:nth-child(6) a {
  display: inline-block;
} */
/* .large li:nth-child(7) a {
  display: inline-block;
}
.large li:nth-child(8) a {
  display: inline-block;
} */
.large li:last-child a {
  display: inline-block;
}
.large li:last-child a:after {
  content: ">";
}
.large li:nth-last-child(2) a {
  display: inline-block;
}
.large li:nth-last-child(3) {
  display: inline-block;
}
.large li:nth-last-child(3):after {
  padding: 0 1rem;
  content: "...";
}
</style>

<template>
  <div id="wrapper" v-on:click="hideLike()">
    <div id="container">
    <div class="mian_left">
      <h1>最受欢迎电影排行榜</h1>
      <div id="divScreenCanvas"></div>
      <div></div>
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
                  <td style=" font-weight: bold; color: #000000; ">猜你喜欢</td>
              </tr>
              <tr v-for="item in top" v-bind:data-id="item.movie_id"  class="trtop">
                  <td>{{item.release_date}}</td>
                  <td v-on:click="gotoDetail(item.movie_id)">{{item.movie_name}}</td>
                  <td>{{item.type}}</td>
                  <td>{{item.region}}</td>
                  <td>{{item.movie_id}}</td>
                  <td v-on:click="getReco(item.movie_id)"><img style="width:30px;height：30px;" src="../common/images/爱心.png">
                  </td>
              </tr>
          </tbody>
        </table>
          <div class="container large">
            <div class="pagination">
              <ul>
                <li v-bind:class="active(n)" v-on:click="getList(n)" v-for="n in totalPage">
                  <a>{{n}}</a>
                </li>
              </ul>
            </div>
          </div>
          </div>
    </div>
    <div class="mian_right" style="    line-height: 39px;   
    padding-left: 10px;">
      <h1>网站信息</h1>
      <div style=" font-weight:bold;    margin-top: 90px;">作者信息</div>
      <div style="color: #80808075;
    line-height: 11px;
    font-size: 10px;">(排名不分先后)</div>
      <ul>
        <li>何文栋</li><br>
        <li>黄璟琳</li><br>
        <li>许鋆莹</li>
      </ul>
      <div style="    color: #03A9F4;
    font-size: 18px;font-weight:bold;">亲，喜欢请扫我哦</div>
      <div><img style="    width: 100px;    display: block;
    margin: 0 auto;" src="../assets/qrcode.jpg"></div>
    </div>
    <div class="recomand">
      <span>猜你喜欢</span>
      <ul>
        <li class="recomand_li" v-bind:data-id="item.movie_id" v-for="item in reco">
          <img class="recomand__img" v-bind:src= "'http://193.112.138.190:666/'+ item.pic_path" >
          <div class="recomand__div">
            <div v-on:click="gotoDetail(item.movie_id)">{{item.movie_name}}</div>
            <div>{{item.type}}</div>
          </div>
        </li>
        </ul>
    </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  data() {
    return {
      test:[1,2,3,4,5,6,7,8],
option : {
  color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer:{
            type:'shadow',
            shadowStyle:{
              color:'transparent'
            }
        },
        
         formatter:function (params) { 
            var type=["剧情","剧情","剧情","剧情","剧情","剧情","剧情","剧情","剧情","剧情","剧情","剧情","剧情","喜剧","动作","喜剧","剧情","爱情","剧情","剧情"];
            var score_num = ["1020783","957044","855673","817080","769531","764730","756700","745722","678826","658787","642189","636262","608239","587838","566676","562675","562664","561031","555875","534779"];
            var score = ["9.6","9.4","9.3","9.4","9.2","9.3","9.3","9.5","8.7","9.2","9","8.9","8.9","9.2","8.6","9.2","9.2","9.3","8.9"]
            var index = params[0].dataIndex;
            return "类型："+type[index]+"<br>评分人数："+score_num[index]+"<br>分数："+score[index]
            /* var cloudid = mydata[param.dataIndex];
            return cloudid;  */
             
          } ,
    },
/*     grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    }, */
    xAxis : [
        {
            type : 'value',
            show:false,
            splitLine:{  
      　　　　  show:false  
        　　}  ,
             min:0,
            max:1520783
            
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            show:false,
            data : [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            splitLine:{  
      　　　　  show:false  
        　　} ,
            axisTick:{
              length:0
            },
            axisLabel:{
              /* lineHeight: 56,
              fontSize:56, */
            },
            inverse:true,
        
        }
    ],
    series : [
        {
            name:'评分',
            type:'bar',
            stack: '总量',
            label: {
                    show: true,
                    position: 'insideLeft',
                    distance:50,
                formatter:function (params) { 
                  var name =  ["肖申克的救赎","这个杀手不太冷","盗梦空间","阿甘正传","三傻大闹宝莱坞","千与千寻し","泰坦尼克号","霸王别姬","让子弹飞","海上钢琴师","少年派的奇幻漂流","怦然心动","当幸福来敲门","疯狂动物城","阿凡达","大话西游之大圣娶亲","星际穿越","机器人总动员","飞屋环游记","楚门的世界"];
                  var num = [1020783,957044,855673,817080,769531,764730,756700,745722,678826,658787,642189,636262,608239,587838,566676,562675,562664,561031,555875,534779];
                  var index = params.dataIndex;
                  console.log('index',params)
                  return name[index] ;
               },
               align:'center',
               color:'white'
                /* align:'right' */
            },
 
           /*  markPoint:{
              itemStyle:{
              borderColor:'white',
              },
              
               data : [
                     {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                    
                ]
            }, */
            barWidth : 23,
            barCategoryGap:'80%',
            barGap :'0%',
            data:[1020783,957044,855673,817080,769531,764730,756700,745722,678826,658787,642189,636262,608239,587838,566676,562675,562664,561031,555875,534779],
           labelLine: {
              normal: {
              show: false
              }
           }
        },
        {
          name:'aa',
          type:'bar',
          stack: '总量',
          data:[1020783,957044,855673,817080,769531,764730,756700,745722,678826,658787,642189,636262,608239,587838,566676,562675,562664,561031,555875,534779],
          itemStyle: {   
            //通常情况下：
            normal:{  
      　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color:'#f8f9fe',
            },
          },
            label: {
                    show: true,
                    position: 'insideLeft',
                    distance:30,
                formatter:function (params) { 
                   
                  var num = [1020783,957044,855673,817080,769531,764730,756700,745722,678826,658787,642189,636262,608239,587838,566676,562675,562664,561031,555875,534779];
                  var index = params.dataIndex;
                  console.log('index',params)
                  return "     " + num[index]+"     " ;
               },
               align:'center',
               color:'black'
                /* align:'right' */
            },
           labelLine: {
              normal: {
              show: false
              }
           }
        }
    ]
},
      page: 1,
      totalPage: 17,
      top :{},
      reco:{},
      
    };
  },
  computed:{
    ...mapGetters([
      'detail'
    ])
  },
  created() {},
  mounted() {
    var vm = this;
    this.__init();
    this.$http.get('http://193.112.138.190:666/getMovie?page=1', {
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
    },
    active(n){
      var tmp = ((this.page-4)<1)?1:(this.page-4)
      if(n===this.page){
          return " active show";
      }
      else if((n===tmp)){
        return "first show";
      }else if(n<(this.page +3)&&(n>this.page-4)){
        return "show";
      }else if(n==(this.page +3)){
        return "show last";
      }else{
        return "";
      }
    },
    getList(n){
      var vm = this;
      this.$http.get('http://193.112.138.190:666/getMovie?page='+ n , {
      params: {
      }
      })
      .then(function (response) {
      var arr = response.data.data["电影列表"];
      vm.top = arr ;
      vm.page = n;
      /* vm.refresh(); */
      //console.log(arr);
      })
      .catch(function (response) {
      //错误处理 比如出现一个蒙层显示网络错误
      console.log(response);
      });
    },
    getReco(id){
      var vm = this;
      var ele = document.getElementsByClassName('recomand')[0];
      ele.style.display = "none";
      this.$http.get('http://193.112.138.190:666/recomend?movie_id='+ id , {
      params: {
      }
      })
      .then(function (response) {
      var arr = response.data.data;
      console.log(arr);
      vm.reco = arr ;
      ele.style.display = "block";
      /* vm.refresh(); */
      //console.log(arr);
      })
      .catch(function (response) {
      //错误处理 比如出现一个蒙层显示网络错误
      console.log(response);
      });
    },
    hideLike(){
      var ele = document.getElementsByClassName('recomand')[0];
      ele.style.display = "none";
    },
    gotoDetail(id){
      var vm = this;
      this.$http.get('http://193.112.138.190:666/getSingleMovie?movie_id='+ id , {
      params: {
      }
      })
      .then(function (response) {
      var arr = response.data.data;
      //跳到详情页 并且传参数
      vm.setdetail(arr);
      vm.$router.push('/Detail');
      })
      .catch(function (response) {
      //错误处理 比如出现一个蒙层显示网络错误
      console.log(response);
      });
    },
    ...mapMutations({
      setdetail: 'SET_MOVIE_DETAIL',
    }),
  },
};
</script>


<style scoped>
.header{
  width:1640px;
}
#wrapper{
  width:1388px!important
}
#container {
overflow: hidden;
width: 90%;
margin: 0 auto;
margin-top: 20px;
}
.mian_left {
  width:470x;
  /* width:400px; */
/* width: 268px; */
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
      margin-top: -70px;
     /*  width: 500px; */
  width: 370px;
/* width: 260px; */
height: 630px;
background-color: rgba(0, 0, 0, 0);
    padding-top: 44px;
}
.mian_center {
width: 664px;
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
background-color: #2c9ef3;
border: solid 1px #2c9ef3;
}
.pagination li.active a {
color: #fdfdfd;
background-color: #2c9ef3;
border: solid 1px #2c9ef3;
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
.large li a {
display: none;
}
.show a{
display: inline-block!important;
}
.last a:after {
content: ">";
}
.first a:after {
content: "<";
}
/* --- */
.recomand{
  display:none;
  padding-top: 30px;
    color:white;
    width: 300px;
    position: absolute;
    background: #333333ab;
    height: 600px;
    overflow: scroll;
    border-radius: 30px;
    left: 78%;
}
.recomand span:first-child{
      font-size: 24px;
    font-weight: bold;
}
.recomand li{
  padding: 10px;
  max-height: 148px;
  display: block;
}
.recomand img{
  width: 84px;
}

.recomand__img{
  vertical-align: top;
}
.recomand__div{
  display: inline-block;
  width: 137px;
  vertical-align: 50px;
  line-height: 25px;
}
::-webkit-scrollbar {
width: 1px;
height: 1px;
}
.recomand__div div:first-child{
  cursor: pointer;
}
</style>


<template>
  <div id="wrapper">
    <div class="subjectwrap clearfix" xmlns:v="http://rdf.data-vocabulary.org/#" typeof="v:Movie">
        <div class="subject clearfix">
            <div id="mainpic" class="">
                <a class="nbgnbg" href="https://movie.douban.com/subject/26430636/photos?type=R" title="点击看更多海报">
                    <img v-bind:src= "'http://193.112.138.190:666/'+ detail.pic_path"  title="点击看更多海报" alt="Rampage" rel="v:image">
                </a>
            </div>
            <div id="info">
                <span>
                    <span class="pl">{{detail.director}}</span>:
                </span>
                <br>
                <span class="actor">
                    <span class="pl">主演</span>:
                    <span class="attrs">
                     {{detail.actor}}
                    </span>
                </span>
                <br>
                <span class="pl">类型:</span>
                {{detail.type}}
                <br>
                <span class="pl">制片国家/地区:</span> {{detail.region}}
                <br>
                <span class="pl">语言:</span> {{detail.language}}
                <br>
                <span class="pl">上映时间:</span>
                <span property="v:initialReleaseDate" content="2018-04-13(美国/中国大陆)">{{detail.release_date}}</span>
                <br>
                <span class="pl">片长:</span>
                <span property="v:runtime" content="107">{{detail.duration}}分钟</span>
            </div>
        </div>
        <div id="interest_sectl">
            <div class="rating_wrap clearbox" rel="v:rating">
                <div class="clearfix">
                    <div class="rating_logo ll">
                        豆瓣评分
                    </div>
                    <div class="output-btn-wrap rr" style="">
                        <img src="https://img3.doubanio.com/f/movie/692e86756648f29457847c5cc5e161d6f6b8aaac/pics/movie/reference.png">
                        <a class="download-output-image" href="#">引用</a>
                    </div>
                </div>
                <div class="rating_self clearfix" typeof="v:Rating">
                    <strong class="ll rating_num" property="v:average">{{detail.movie_score}}</strong>
                    <span property="v:best" content="10.0"></span>
                    <div class="rating_right ">
                        <div class="ll bigstar bigstar35"></div>
                        <div class="rating_sum">
                            <a href="collections" class="rating_people">
                                <span property="v:votes">{{detail.score_num}}</span>人评价</a>
                        </div>
                    </div>
                </div>
                <div class="ratings-on-weight">
                    <div class="item">
                        <span class="stars5 starstop" title="力荐">
                            5星
                        </span>
                        <div class="power" v-bind:style='{width:detail.five_star*100 + "px"}'></div>
                        <span class="rating_per">{{(detail.five_star*100).toFixed(2)}}%</span>
                        <br>
                    </div>
                    <div class="item">
                        <span class="stars4 starstop" title="推荐">
                            4星
                        </span>
                        <div class="power" v-bind:style='{width:detail.four_star*100 + "px"}'></div>
                        <span class="rating_per">{{(detail.four_star*100).toFixed(2)}}%</span>
                        <br>
                    </div>
                    <div class="item">
                        <span class="stars3 starstop" title="还行">
                            3星
                        </span>
                        <div class="power" v-bind:style='{width:detail.three_star*100 + "px"}'></div>
                        <span class="rating_per">{{(detail.three_star*100).toFixed(2)}}%</span>
                        <br>
                    </div>
                    <div class="item">

                        <span class="stars2 starstop" title="较差">
                            2星
                        </span>
                        <div class="power" v-bind:style='{width:detail.two_star*100 + "px"}'></div>
                        <span class="rating_per">{{(detail.two_star*100).toFixed(2)}}%</span>
                        <br>
                    </div>
                    <div class="item">

                        <span class="stars1 starstop" title="很差">
                            1星
                        </span>
                        <div class="power" v-bind:style='{width:detail.one_star*100 + "px"}'></div>
                        <span class="rating_per">{{(detail.one_star*100).toFixed(2)}}%</span>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="related-info" style="margin-bottom:-10px;">
    <a name="intro"></a>
    <h2>
        <i class="">{{detail.movie_name}}的剧情简介</i>
        · · · · · ·
    </h2>
    <div class="indent" id="link-report">
        <span property="v:summary" class="">
            {{detail.summary}}
        </span>
    </div>
</div>
  </div>
</template>

<script>
import '../../common/css/douban.css'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'detail'
    ])
  },
};
</script>

<style scoped>
#interest_sectl .rating_self {
    padding: 0;
    line-height: 2;
    display: block;
}
.subjectwrap {
    width: 800px;
    margin: 0 auto;
}
#mainpic {
    max-width: 350px;
        margin: 3px 30px 0 0;
}
.subject {
    width: 568px;
}
#info {
    text-align: left;
}
.subjectwrap {
    width: 800px;
    margin: 0 auto;
    margin-top: 52px;
}
.clearfix {
    display: inline-block;
}
.related-info{
      margin-bottom: -10px;
    width: 800px;
    margin: 0 auto;
    text-align: left;
    line-height: 25px;
}
#interest_sectl{
        width: 215px;
}
</style>

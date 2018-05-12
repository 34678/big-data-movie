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
                <span class="pl">上映日期:</span>
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
                    <strong class="ll rating_num" property="v:average">6.7</strong>
                    <span property="v:best" content="10.0"></span>
                    <div class="rating_right ">
                        <div class="ll bigstar bigstar35"></div>
                        <div class="rating_sum">
                            <a href="collections" class="rating_people">
                                <span property="v:votes">50171</span>人评价</a>
                        </div>
                    </div>
                </div>
                <div class="ratings-on-weight">
                    <div class="item">
                        <span class="stars5 starstop" title="力荐">
                            5星
                        </span>
                        <div class="power" style="width:9px"></div>
                        <span class="rating_per">7.9%</span>
                        <br>
                    </div>
                    <div class="item">
                        <span class="stars4 starstop" title="推荐">
                            4星
                        </span>
                        <div class="power" style="width:39px"></div>
                        <span class="rating_per">31.1%</span>
                        <br>
                    </div>
                    <div class="item">
                        <span class="stars3 starstop" title="还行">
                            3星
                        </span>
                        <div class="power" style="width:64px"></div>
                        <span class="rating_per">51.0%</span>
                        <br>
                    </div>
                    <div class="item">

                        <span class="stars2 starstop" title="较差">
                            2星
                        </span>
                        <div class="power" style="width:11px"></div>
                        <span class="rating_per">8.8%</span>
                        <br>
                    </div>
                    <div class="item">

                        <span class="stars1 starstop" title="很差">
                            1星
                        </span>
                        <div class="power" style="width:1px"></div>
                        <span class="rating_per">1.1%</span>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="related-info" style="margin-bottom:-10px;">
    <a name="intro"></a>
    <h2>
        <i class="">狂暴巨兽的剧情简介</i>
        · · · · · ·
    </h2>
    <div class="indent" id="link-report">
        <span property="v:summary" class="">
            巨石强森饰演的灵长类动物学家一直与人类保持距离, 却跟极为聪明的银背大猩猩乔治有着深厚的感情。但是一次基因实验出错, 让这只温驯的大猩猩变成狂怒难驯的庞然巨兽。更可怕的是, 其他动物也发生了同样基因异变。他必须阻止这场全球性的灾难, 更重要是要拯救他的好友乔治。
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
</style>

<template>
<div class="container">
    <div class="row">
    <div class="col-xs-12">
        <div class="portrait-type-module">
        <a href="javascript:;" v-bind:class="{ active: active1 }" >时长分析</a>
        <a href="javascript:;" v-bind:class="{ active: active2 }" >用户分析</a>
        <a href="javascript:;" v-bind:class="{ active: active3 }"  >电影地区分析</a>
        <a href="javascript:;" v-bind:class="{ active: active4 }" >类型分析</a>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import  '../../common/css/anotherTab.css'
export default {
    props: {
        active1:{
            default : false
        },
        active2:{
            default : false
        },
        active3:{
            default : false
        },
        active4:{
            default : false
        },
    }
}
</script>

<style scoped>
.container{
    height: 100px;
}
.row {
    height: 100px;
    padding: 10px 0;
}
</style>

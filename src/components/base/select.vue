<template>
 
<div class="list">
  <div class="name">
    <i class="iconfont"></i>
    <span>{{items[0]}}</span>
</div>
<div></div>
  <!--ms-if--></div>
 
</template>

<script>
export default {
    data(){
        return {
            items:[1,2,3,4,5,6]
        }
    }
}
</script>

<style scoped>
.list{
    width: 138px;
    position: relative;
    z-index: 9;
    margin-left: 300px;
    margin-top: 30px;
}
.list .name {
    height: 28px;
    line-height: 28px;
    border: 1px solid #dedede;
    border-radius: 3px;
    background: #fff;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 20px;
}
</style>

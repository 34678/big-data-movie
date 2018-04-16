<template>
  <div id="app">
    <Header></Header>
    <tab></tab>
    <keep-alive>
    <router-view class="view"></router-view>
      </keep-alive>
  </div>
</template>

<script>
import Tab from './components/tab/tab'
import Header from './components/header/header'
export default {
  name: 'App',
  components: {
    Header,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab{
  width: 20%;
  display: inline-block;
  float:left;
}
  .view{

  }
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  './common/css/reset.css'
import './common/css/share.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
import axios from 'axios'
Vue.prototype.$http = axios
import pagination from 'pagination'
Vue.prototype.$pagination = pagination
import jquery from 'jquery'
Vue.prototype.$ = jquery

/* import d3 from 'd3'
Vue.prototype.$d3 = d3 */

Vue.config.productionTip = false

import store from './store/index.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

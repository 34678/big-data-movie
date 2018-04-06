import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/s'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'score_',
      component: HelloWorld
    }
  ]
})

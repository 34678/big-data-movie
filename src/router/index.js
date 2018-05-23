import Vue from 'vue'
import Router from 'vue-router'
import ScoreAnalysis from '@/components/score_analysis.vue'
import Data from '@/components/data.vue'
import Detail from '@/components/data/detail.vue'

import Duration from '@/components/score/duration.vue'
import User from '@/components/score/user.vue'
import highScoreAype from '@/components/score/highscoreAype.vue'
import highScoreType from '@/components/score/highscoreType.vue'
import areaChange from '@/components/score/areaChange.vue'
import typeChange from '@/components/score/typeChange.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Data',
      component: Data
    },
    {
      path: '/ScoreAnalysis',
      name: 'ScoreAnalysis',
      component: ScoreAnalysis,
      children: [
        {
          path: '/',
          component: Duration
        },
        {
          path: 'Duration',
          component: Duration
        },
        {
          path: 'User',
          component: User
        },
        {
          path: 'highScoreAype',
          component: highScoreAype
        },
        {
          path: 'highScoreType',
          component: highScoreType  
        },
        {
          path: 'areaChange',
          component: areaChange  
        },
        {
          path: 'typeChange',
          component: typeChange 
        }
      ]
    },
    {
      path: '/Data',
      name: 'Data',
      component: Data
    },
    {
      path: '/Detail',
      name: 'Detial',
      component: Detail
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import ScoreAnalysis from '@/components/score_analysis.vue'
import Data from '@/components/data.vue'
import Myarea from '@/components/score/myarea.vue'
import Mytype from '@/components/score/mytype.vue'
import highScore from '@/components/score/highscore.vue'
import Duration from '@/components/score/duration.vue'
import Detail from '@/components/data/detail.vue'

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
          component: Myarea
        },
        {
          path: 'Myarea',
          component: Myarea
        },
        {
          path: 'Mytype',
          component: Mytype
        },
        {
          path: 'highScore',
          component: highScore
        },
        {
          path: 'Duration',
          component: Duration    
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

import Vue from 'vue'
import Router from 'vue-router'
import ScoreAnalysis from '@/components/score_analysis.vue'
import Data from '@/components/data.vue'
import Myarea from '@/components/score/myarea.vue'
import Mytype from '@/components/score/mytype.vue'
import Language from '@/components/score/language.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScoreAnalysis',
      component: ScoreAnalysis
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
          path: 'Language',
          component: Language
        }
      ]
    },
    {
      path: '/Data',
      name: 'Data',
      component: Data
    }

  ]
})

import * as types from './types.js'

const mutations = {
    [types.SET_MOVIE_DETAIL](state, detail) {
      state.detail = detail
    }
  }
  
  export default mutations
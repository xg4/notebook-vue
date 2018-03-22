import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  notes: [],
  sort_by_time: false,
  tagMap: {
    primary: '蓝色',
    success: '绿色',
    info: '灰色',
    warning: '黄色',
    danger: '红色'
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  getters,
  actions,
  mutations
})

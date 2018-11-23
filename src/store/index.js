import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  data: {
    subjects: ''
  },
  commentData: {},
  detailUserId: 0,
  chat: false,
  cancel: false,
  commentClick: false,
  userClick: false,
  userData: {},
  currentUser: {},
  isAjax: false,
  nowDetail: {}
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

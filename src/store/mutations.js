import * as types from './mutations-types'

export default {
  [types.RECEVIVE_DATA](state, data) {
    state.data.subjects = data
  },
  [types.REFRESH_AJAX](state, stutas) {
    state.isAjax = stutas
  },
  [types.TOGGLE_TEXT](state, val) {
    state.nowDetail = val
  },
  [types.TOGGLE_CHAT](state, val) {
    state.chat = val
  },
  [types.SEARCH_CANCEL](state, val) {
    state.cancel = val
  },
  [types.COMMENT_DATA](state, data) {
    state.commentData = data
  },
  [types.COMMENT_CHAT](state, val) {
    state.commentClick = val
  },
  [types.USER_CHAT](state, val) {
    state.userClick = val
  },
  [types.USER_DATA](state, data) {
    state.userData = data
  }
}

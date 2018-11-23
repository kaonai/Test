import * as types from './mutations-types'

export default {
  async AllData({commit}, axios) {
    commit(types.REFRESH_AJAX, true)
    let subjects = await axios.get('/api/subjects')
    subjects = subjects.data.data
    commit(types.RECEVIVE_DATA, subjects)
    commit(types.REFRESH_AJAX, false)
  },
  showDetail({commit}, id) {
    commit(types.TOGGLE_TEXT, id) // 指定当前展示主页用户id
    commit(types.TOGGLE_CHAT, true) // 打开个人主页
  },
  commentDetail({commit}, id) {
    commit(types.COMMENT_DATA, id)
    commit(types.COMMENT_CHAT, true)
  },
  userDeatil({commit}, id) {
    commit(types.USER_DATA, id)
    commit(types.USER_CHAT, true)
  }
}

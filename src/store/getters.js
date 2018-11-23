export const detailUserData = (state) => {
  let id = state.detailUserId
  if (id === 0) {
    return state.data.subjects
  }
  let recode = state.data.subjects.find(item => item.id === id)
  return recode
}
export const allData = (state) => {
  return state.data.subjects
}

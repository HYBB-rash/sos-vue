export default {
  state: {
    username: 'MyUsername',
    name: '用户的名字',
    sex: '男',
    address: '上海市浦东新区沪城环路1851号',
    phone: '13928624282',
    company: 'SUEP'
  },
  mutations: {
    refreshProfile (state, playLoad) {
      state.username =
        window.localStorage.getItem('userToken' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('userToken' || '[]')).username
      if (playLoad.profile !== null) {
        state.name = playLoad.profile.name
        state.sex = playLoad.profile.sex
        state.address = playLoad.profile.address
        state.phone = playLoad.profile.phone
        state.company = playLoad.profile.company
      }
    }
  }
}

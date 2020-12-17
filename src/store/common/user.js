export default {
  state: {
    id: null,
    address: 'http://localhost:8080/ans/'
  },
  mutations: {
    resetStatus (state) {
      state.id = null
    },
    setStatus (state, playLoad) {
      state.id = playLoad.id
    }
  }
}

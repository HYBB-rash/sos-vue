export default {
  state: {
    surveyMessage:
    [
      // {
      //   id: Date.now(),
      //   title: '我的一个测试问卷',
      //   status: 0,
      //   day: '2011-11-20',
      //   count: 10
      // },
      // {
      //   id: Date.now(),
      //   title: '我的一个测试问卷',
      //   status: 1,
      //   day: '2011-11-22',
      //   count: 100
      // },
      // {
      //   id: Date.now(),
      //   title: '我的一个测试问卷',
      //   status: -1,
      //   day: '2011-11-22',
      //   count: 100
      // }
    ]
  },
  mutations: {
    resetSurveyMessage (state) {
      state.surveyMessage = []
    },
    pushSurveyMessage (state, playLoad) {
      while (state.surveyMessage.length > 0) {
        state.surveyMessage.pop()
      }
      for (let i = 0; i < playLoad.result.length; i++) {
        state.surveyMessage.push(playLoad.result[i])
      }
    }
  }
}

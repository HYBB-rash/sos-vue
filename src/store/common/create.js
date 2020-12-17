export default {
  state: {
    id: null,
    userId: null,
    surveyTitle: '我的一个测试问卷',
    instruction: '这是一些说明，这是一些说明，这是一些说明，这是一些说明，这是一些说明，',
    forms: [
      // {
      //   id: 1607659615766,
      //   question: '如果这是一个单选题，你觉得这个单选题做的怎么样？',
      //   type: 0,
      //   context: '',
      //   rate: 0,
      //   ans: -1,
      //   multi: [],
      //   flag: false,
      //   choices: [
      //     {value: '很好'},
      //     {value: '好'},
      //     {value: '一般'},
      //     {value: '很差'}
      //   ]
      // },
      // {
      //   id: 1607659615767,
      //   question: '如果这是一个多选题，你觉得这个多选题应该怎么改进',
      //   type: 1,
      //   context: '',
      //   rate: 0,
      //   ans: -1,
      //   flag: false,
      //   multi: [],
      //   choices: [
      //     {value: '弄得好看点'},
      //     {value: '弄得效率高一点'},
      //     {value: '色彩可以弄得丰富一点'},
      //     {value: '动画可以考虑弄得好一些'}
      //   ]
      // },
      // {
      //   id: 1607659615768,
      //   question: '如果这是一个评价题，你会对这个题型做出什么样得评价',
      //   type: 2,
      //   context: '',
      //   rate: null,
      //   ans: -1,
      //   multi: [],
      //   flag: false,
      //   choices: [
      //     {value: ''}
      //   ]
      // },
      // {
      //   id: 1607659615769,
      //   question: '如果这是一个评分题，你会对这个题型打多少分',
      //   type: 3,
      //   context: '',
      //   rate: 0,
      //   ans: -1,
      //   multi: [],
      //   flag: false,
      //   choices: [
      //     {value: ''}
      //   ]
      // }
    ]
  },
  mutations: {
    pushQuestion (state, playLoad) {
      state.forms.push(playLoad.q)
    },
    addQuestion (state, playLoad) {
      state.forms.push(playLoad.forms)
    },
    removeQuestion (state, playLoad) {
      let index = -1
      for (let i = 0; i < state.forms.length; i++) {
        if (state.forms[i].key === playLoad.key) {
          index = i
          break
        }
      }
      if (playLoad.index !== -1) {
        state.forms.splice(index, 1)
      }
    },
    refreshEdit (state, playLoad) {
      // console.log(playLoad.editForm.forms.length)
      // console.log('-----')
      // console.log(state.forms.length)
      state.userId = playLoad.editForm.userId
      state.surveyTitle = playLoad.editForm.surveyTitle
      state.instruction = playLoad.editForm.instruction
      while (state.forms.length > 0) {
        state.forms.pop()
      }
      for (let i = 0; i < playLoad.editForm.forms.length; i++) {
        state.forms.push(playLoad.editForm.forms[i])
      }
    },
    resetCreate (state) {
      state.id = null
      state.surveyTitle = ''
      state.instruction = ''
      while (state.forms.length > 0) {
        state.forms.pop()
      }
    },
    refreshInstruction (state, playLoad) {
      state.instruction = playLoad.value
    }
  }
}


export default {
  state: {
    id: null,
    userId: null,
    surveyTitle: '',
    instruction: '',
    forms: [
      {
        id: 1607659615766,
        question: '如果这是一个单选题，你觉得这个单选题做的怎么样？',
        type: 0,
        context: '',
        rate: 0,
        ans: -1,
        multi: [],
        flag: false,
        choices: [
          {value: '很好', key: 1607659142948},
          {value: '好', key: 1607659142949},
          {value: '一般', key: 1607659142950},
          {value: '很差', key: 1607659142951}
        ]
      },
      {
        id: 1607659615767,
        question: '如果这是一个多选题，你觉得这个多选题应该怎么改进',
        type: 1,
        context: '',
        rate: 0,
        ans: -1,
        flag: false,
        multi: [],
        choices: [
          {value: '弄得好看点', key: 1607659074952},
          {value: '弄得效率高一点', key: 1607659090076},
          {value: '色彩可以弄得丰富一点', key: 1607659099465},
          {value: '动画可以考虑弄得好一些', key: 1607659121665}
        ]
      },
      {
        id: 1607659615768,
        question: '如果这是一个评价题，你会对这个题型做出什么样得评价',
        type: 2,
        context: '',
        rate: null,
        ans: -1,
        multi: [],
        flag: false,
        choices: [
          {value: '', key: 1607659039503}
        ]
      },
      {
        id: 1607659615769,
        question: '如果这是一个评分题，你会对这个题型打多少分',
        type: 3,
        context: '',
        rate: 0,
        ans: -1,
        multi: [],
        flag: false,
        choices: [
          {value: '', key: 1607659142951}
        ]
      }
    ]
  },
  mutations: {
    refreshAnsPage (state, playLoad) {
      state.userId = playLoad.forms.userId
      state.surveyTitle = playLoad.forms.surveyTitle
      state.instruction = playLoad.forms.instruction
      while (state.forms.length > 0) {
        state.forms.pop()
      }
      for (let i = 0; i < playLoad.forms.forms.length; i++) {
        state.forms.push(playLoad.forms.forms[i])
      }
    },
    refreshAnsInstruction (state, playLoad) {
      state.instruction = playLoad.value
    }
  }
}

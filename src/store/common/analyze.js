export default {
  state: {
    rowData:
    [
      {
        title: '测试柱状图',
        type: 0,
        xData: ['测试选项1', '测试选项2', '测试选项3', '测试选项4'],
        data: [10, 20, 15, 30]
      },
      {
        title: '测试饼状图',
        type: 1,
        data:
        [
          {value: 100, name: '选项1'},
          {value: 200, name: '选项2'},
          {value: 500, name: '选项3'},
          {value: 250, name: '选项4'}
        ]
      },
      {
        title: '测试折线图',
        type: 3,
        xData: ['1分', '2分', '3分', '4分', '5分'],
        data: [100, 200, 150, 80, 19]
      },
      {
        title: '测试表格图',
        type: 2,
        data:
        [
          '测试回答1',
          '测试回答2',
          '测试回答3',
          '测试回答4'
        ]
      }
    ]
  }
}

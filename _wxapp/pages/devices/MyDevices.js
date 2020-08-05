Page({
  data: {
    accordion: [{
      title: 'eda摄像头',
      number: 5,
      state: 'abnormal',
      stateNum: 1,
      content: [{
        title: '摄像头温度过高'
      }]
    }, {
      title: '食堂摄像头',
      number: 5,
      state: 'normal',
      stateNum: 1,
      content: []
    }, {
      title: '教学楼门口摄像头',
      number: 5,
      state: 'normal',
      stateNum: 5,
      content: []
    }]
  },

  navagate: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  
})
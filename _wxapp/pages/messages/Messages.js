Page({
  data: {
    list1: [],
    el: 'undefined'
  },

  navagate:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
});
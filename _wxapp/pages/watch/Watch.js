Page({
  data: {

  },

  navagate: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  watch1: function () {
    wx.navigateTo({
      url: 'device1/Watch',
    })
  },
  watch2: function () {
    wx.navigateTo({
      url: 'device2/Watch',
    })
  },
  watch3: function () {
    wx.navigateTo({
      url: 'device3/Watch',
    })
  },

})
Page({
  data: {

  },

 onLoad:function(options){
    wx.connectSocket({
      url: 'wss://fw.trinicloud.cn:17049',
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success() {
        console.log('success');
      },
      fail() {
        console.log('fail')
      }
    });
   wx.onSocketOpen(function () {
     wx.sendSocketMessage({
       data: "yeah"
     })
     wx.onSocketMessage(function (res) {
       console.log(JSON.parse(res.data))
     })
   })
  },
 


  navagate: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  suggetions:function(){
    wx.navigateTo({
      url: 'Suggestions/suggestions',
    })
  }
})
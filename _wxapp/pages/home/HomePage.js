"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    dotPoint:{},
    customStyle3: {
      'background-color': '#39f',
      'position': 'absolute',
      'border': '1px solid #fff'
    },
    indexmenu: [
      {
        'icon': 'bell',
        'text': '实时监测',
        'url': 'watch/Watch'
      },
      {
        'icon': 'home-icon-08',
        'text': '流量统计',
        'url': 'statistics/Charts'
      },
      {
        'icon': 'qn-camera',
        'text': '查看设备',
        'url': 'devices/MyDevices'
      },
      {
        'icon': 'user',
        'text': '个人中心',
        'url':'personal/PersonalPage'
      },
    ],
  },


  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var dot = res.windowWidth * 0.5;
        console.log(dot)
        that.setData({
          dotPoint: { clientX: 0, clientY: dot}
        })
      }
    })
  },
  messages:function(){
    wx.navigateTo({
      url: '../messages/Messages',
    })
  },
  navigatetoechart:function(){
    wx.navigateTo({
      url: '../statistics/Charts',
    })
  }
});

import * as echarts from '../../packages/ec-canvas/echarts';

const app = getApp();

function initChart1(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title:{
      text:'预警情况',
      textStyle:{
        fontSize:18,
        color:'#0dc1ae',
        fontWeight:'bold'
      },
      left:20,
      top:10
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['eda实验室', '食堂', '教学楼门口'],
      top: 30,
      left: 'center',
      z: 50,
      itemWidth:35,
    },
    grid: {
      containLabel: true,
      x:10,
      y2:15
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二','周三', '周四','周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'eda实验室',
      type: 'line',
      smooth: true,
      data: [8, 16, 6, 10, 18, 10, 13]
    }, {
      name: '食堂',
      type: 'line',
      smooth: true,
      data: [12, 5, 11, 3, 7, 13, 20]
    }, {
      name: '教学楼门口',
      type: 'line',
      smooth: true,
      data: [1, 0, 3, 5, 14, 20, 10]
    }]
  };
  chart.setOption(option);
  return chart;
}

function initChart2(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '人流量',
      textStyle: {
        fontSize: 18,
        color: '#0dc1ae',
        fontWeight: 'bold'
      },
      left: 20,
      top: 10
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['eda实验室', '食堂', '教学楼门口'],
      top: 30,
      left: 'center',
      z: 50,
      itemWidth: 35,
    },
    grid: {
      containLabel: true,
      x: 10,
      y2: 15
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'eda实验室',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '食堂',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '教学楼门口',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [120, 132, 251, 104, 230, 200, 170]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

function initChart3(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '人流量',
      textStyle: {
        fontSize: 18,
        color: '#0dc1ae',
        fontWeight: 'bold'
      },
      left: 20,
      top: 10
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['eda实验室', '食堂', '教学楼门口'],
      top: 30,
      left: 'center',
      z: 50,
      itemWidth: 35,
    },
    grid: {
      containLabel: true,
      x: 10,
      y2: 15
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'eda实验室',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '食堂',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '教学楼门口',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [320, 432, 351, 404, 530, 600, 570]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

function initChart4(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '人流量',
      textStyle: {
        fontSize: 18,
        color: '#0dc1ae',
        fontWeight: 'bold'
      },
      left: 20,
      top: 10
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['eda实验室', '食堂', '教学楼门口'],
      top: 30,
      left: 'center',
      z: 50,
      itemWidth: 35,
    },
    grid: {
      containLabel: true,
      x: 10,
      y2: 15
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'eda实验室',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '食堂',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '教学楼门口',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [320, 432, 351, 404, 530, 600, 570]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

function initChartCanl(canvas,width,height){

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var cellSize = [48, 48];
  var pieRadius = 12;

  function getVirtulData() {
    var date = +echarts.number.parseDate('2019-05-01');
    var end = +echarts.number.parseDate('2019-06-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }
  function getPieSeries(scatterData, chart) {
    return echarts.util.map(scatterData, function (item, index) {
      var center = chart.convertToPixel('calendar', item);
      return {
        id: index + 'pie',
        type: 'pie',
        center: center,
        label: {
          normal: {
            formatter: '{c}',
            position: 'inside'
          }
        },
        radius: pieRadius,
        data: [
          { name: 'eda实验室', value: Math.round(Math.random() * 24) },
          { name: '食堂', value: Math.round(Math.random() * 24) },
          { name: '教学楼门口', value: Math.round(Math.random() * 24) }
        ]
      };
    });
  }

  function getPieSeriesUpdate(scatterData, chart) {
    return echarts.util.map(scatterData, function (item, index) {
      var center = chart.convertToPixel('calendar', item);
      return {
        id: index + 'pie',
        center: center
      };
    });
  }

  var scatterData = getVirtulData();

  var option = {
    tooltip: {},
    legend: {
      data: ['eda实验室', '食堂', '教学楼门口'],
      bottom: 10
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    calendar: {
      top: 'middle',
      left: 'center',
      orient: 'vertical',
      cellSize: cellSize,
      yearLabel: {
        show: false,
        textStyle: {
          fontSize: 25
        }
      },
      dayLabel: {
        margin: 10,
        firstDay: 1,
        nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      },
      monthLabel: {
        show: false
      },
      range: ['2019-05']
    },
    series: [{
      id: 'label',
      type: 'scatter',
      coordinateSystem: 'calendar',
      symbolSize: 1,
      label: {
        normal: {
          show: true,
          formatter: function (params) {
            return echarts.format.formatTime('dd', params.value[0]);
          },
          offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          textStyle: {
            color: '#000',
            fontSize: 14
          }
        }
      },
      data: scatterData
    }]
  };

  if (!app.inNode) {
    var pieInitialized;
    setTimeout(function () {
      pieInitialized = true;
      chart.setOption({
        series: getPieSeries(scatterData,chart)
      });
    }, 10);

    app.onresize = function () {
      if (pieInitialized) {
        chart.setOption({
          series: getPieSeriesUpdate(scatterData, chart)
        });
      }
    };
  }
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    contentshow:0,
    ec1: {
      onInit: initChart1
    },
    ec2: {
      onInit: initChart2
    },
    ec3: {
      onInit: initChart3
    },
    ec4: {
      onInit: initChart4
    },
    ec5:{
      onInit: initChartCanl
    }
  },
  navagate: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  changTab(e) {
    let index = e.detail.index
    this.setData({
      contentshow: index
    })
  },
  onReady() {
  }
});


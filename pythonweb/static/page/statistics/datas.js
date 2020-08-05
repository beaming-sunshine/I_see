//echart图表设置

// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('chart1'));
var myChart2 = echarts.init(document.getElementById('chart2'));
var myChart3 = echarts.init(document.getElementById('chart3'));
var myChart4 = echarts.init(document.getElementById('chart4'));
var myChart5 = echarts.init(document.getElementById('chart5'));
var myChart6 = echarts.init(document.getElementById('chart6'));

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '报警次数统计'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data:['数量'],
        right:'20px'
    },
    xAxis: {
        data: ["eda实验室","食堂","教学楼门口"]
    },
    yAxis: {},
    series: [{
        name: '数量',
        type: 'bar',
        data: [5, 20, 36],
        itemStyle:{
            normal:{
                color:'#1AA094'
            }
        },
    }]
};

var option2 = {
    title: {
        text: '实时流量数据'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['eda实验室','食堂','教学楼门口']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00']
    },
    yAxis: {
        type: 'value'
    },
    series: [
    {
        name:'eda实验室',
        type:'line',
        stack: '总量',
        itemStyle:{
            normal:{
                color:'#1AA094'
            }
        },
        data:[120, 132, 101, 134, 90, 230, 210,70,120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'食堂',
        type:'line',
        stack: '总量',
        itemStyle:{
            normal:{
                color:'#4E5465'
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310,120,120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'教学楼门口',
        type:'line',
        stack: '总量',
        itemStyle:{
            normal:{
                color:'#5FB878'
            }
        },
        data:[150, 232, 201, 154, 190, 330, 410,120,220, 182, 191, 234, 290, 330, 310]
    }
    ]
}

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option1);
myChart4.setOption(option2);
myChart5.setOption(option1);
myChart6.setOption(option2);


//日历设置
laydate.render({
  elem: '#data'
  ,theme: '#1AA094'
  ,trigger: 'click'
  ,done: function(value, date){
     console.log('你选择的日期是：' + value + '\n获得的对象是' + JSON.stringify(date));
 }
});
// import * as echarts from 'echarts';

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Corrective',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [0, 50, 54, 42, 43, 60, 51, 42, 45, 51, 72]
    },
    {
      name: 'Periodic',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [0, 11, 38, 49, 50, 36, 32, 51, 50, 43, 28]
    },
    {
      name: 'Preventative',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [0, 39, 7, 9, 7, 4, 17, 7, 5, 6, 0]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
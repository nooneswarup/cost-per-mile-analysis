// import * as echarts from 'echarts';

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

var dom = document.getElementById('chart-container-10');
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
      data: [28,34,49,38,41,59,52,60,59,68,60]
    },
    {
      name: 'Periodic',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [63,49,43,55,50,38,38,38,38,26,34]
    },
    {
      name: 'Preventative',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [8,16,8,6,9,10,10,2,3,6,6]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
// import * as echarts from 'echarts';

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

var dom = document.getElementById('chart-container-4');
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
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
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
      data: [100,20,32,27,21,33,47,54,56]
    },
    {
      name: 'Periodic',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [0,59,39,49,66,52,41,30,26]
    },
    {
      name: 'Preventative',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [0,22,29,24,13,16,12,16,18]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
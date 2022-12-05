// import * as echarts from 'echarts';

// var chartDom = document.getElementById('main');
// var myChart = echarts.init(chartDom);
// var option;

var dom = document.getElementById('chart-container-7');
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
      data: [74,5,90,86,60,76,63,79,95,50,71]
    },
    {
      name: 'Periodic',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [21,95,10,11,19,4,24,6,3,0,29]
    },
    {
      name: 'Preventative',
      type: 'bar',
      stack: 'x',
      emphasis: {
        focus: 'series'
      },
      data: [4,0,0,3,21,19,13,15,2,50,0,]
    }
  ]
};


if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
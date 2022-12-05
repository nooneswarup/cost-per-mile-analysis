var dom = document.getElementById('chart-container-2');
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
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Cost per mile']
  },
  xAxis: [
    {
      type: 'category',
      data: ['2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Cost per mile',
      min: 0,
      max: 2,
      interval: 0.2,
      axisLabel: {
        formatter: '{value} $'
      }
    },
     {
      type: 'value',
      name: 'Cost per mile',
      min: 0,
      max: 1,
      interval: 0.1,
      axisLabel: {
        formatter: '{value} $'
      }
    }
  ],
  series: [
    {
      name: 'Cost per mile',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' $';
        }
      },
      data: [NaN, 0.15, 0.32, 0.37, 0.23, 0.44, 0.46, 0.57, 0.63, 0.53, NaN]
    },
     {
      name: 'Cost per mile',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °S';
        }
      },
      data: [NaN, 0.15, 0.32, 0.37, 0.23, 0.44, 0.46, 0.57, 0.63, 0.53, NaN]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
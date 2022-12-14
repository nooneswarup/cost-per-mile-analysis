var dom = document.getElementById('chart-container-5');
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
      data: ['2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021'],
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
          data: [ 0.02,0.12,0.06,0.09,0.08,0.16,0.21,0.18,0.33]
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
      data: [ 0.02,0.12,0.06,0.09,0.08,0.16,0.21,0.18,0.33]
      }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
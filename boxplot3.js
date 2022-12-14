var dom = document.getElementById('chart-container-9');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  title: [
    {
      text: 'Cost per mile',
      left: 'center'
    },
    {
      text: 'cost per mile',
      borderColor: '#999',
      borderWidth: 1,
      textStyle: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20
      },
      left: '10%',
      top: '90%'
    }
  ],
  dataset: [
    {
      // prettier-ignore
      source: [
        [NaN,NaN], 
        [NaN,NaN],
        [NaN,NaN],
        [NaN,NaN],
        [0.07,0.11],
        [0.19,0.38],
        [0.27,0.65],
        [0.11,0.5],
        [0.5,0.68],
        [NaN,NaN],
        [NaN,NaN]
            ]
    },
    {
      transform: {
        type: 'boxplot',
        config: { itemNameFormatter: '{value}' }
      }
    },
    {
      fromDatasetIndex: 1,
      fromTransformResult: 1
    }
  ],
  // tooltip: {
  //   trigger: 'item',
  //   axisPointer: {
  //     type: 'shadow'
  //   }
  // },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    // data: ['4', '3', '2', '1', '','5','7','8'],
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'cost per mile',
    splitArea: {
      show: true
    }
  },
  series: [
    {
      name: 'boxplot',
      type: 'boxplot',
      datasetIndex: 1
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
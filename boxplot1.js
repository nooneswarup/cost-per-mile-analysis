var dom = document.getElementById('chart-container-3');
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
                [],
                [0.15, 0.09, 0.11],
                [0.32, 0.52, 0.25],
                [0.37, 0.94, 0.30],
                [0.23, 0.25, 0.19],
                [0.44, 0.34, 0.35],
                [0.46, 0.70, 0.46],
                [0.57, 0.98, 0.56],
                [0.63, 1.10, 0.55],
                [0.53, 0.59, 0.47],
                []
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
var dom = document.getElementById('chart-container-12');
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
        [0.10 , 0.25 , 0.13],
        [-0.20, 0.30 , 0.21],
        [0.24 , 0.12 , 0.30],
        [0.21 , 0.49 , 0.26],
        [-0.30, 1.72 , 0.32],
        [0.58 , 2.38 , 0.64],
        [-0.36, 1.44 , 0.40],
        [-0.79, 2.85 , 0.84],
        [-0.61, 2.46 , 0.61],
        [-1.22, 19.93, 1.24],
        [-0.94, 1.32 , 0.96],
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
var dom = document.getElementById('chart-container-6');
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
                [NaN,	 NaN,	 0.02 ],
                [NaN,	 NaN,  	 0.12 ],
                [0.06,	 0.16, 	 0.06 ],
                [0.09,	 0.15, 	 0.09 ],
                [0.05,	 0.49,	 0.08 ],
                [0.12,	 0.72,	 0.16 ],
                [0.18,	 0.94,	 0.21 ],
                [0.12,	 0.18,	 0.18 ],
                [0.28,	 0.64,	 0.33 ]
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
//   tooltip: {
//     trigger: 'item',
//     axisPointer: {
//       type: 'shadow'
//     }
//   },
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
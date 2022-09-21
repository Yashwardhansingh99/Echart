import React from 'react';
import ReactECharts from 'echarts-for-react';
import WineData from './WineData';

const App = () => {
  const coordinates = WineData.map(wineData => ({
    Alcohol: wineData['Alcohol'],
    'Malic Acid': wineData['Malic Acid'],
  }));
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: coordinates.map(wineData => wineData['Alcohol']),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: coordinates.map(wineData => wineData['Malic Acid']),
        type: 'bar',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default App;

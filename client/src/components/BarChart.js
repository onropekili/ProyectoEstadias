import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data, chartId }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById(chartId);

    // Destroy the previous chart if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the new chart
    chartRef.current = new Chart(canvas, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup: destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, chartId]);

  return <canvas id={chartId} width="auto" height="190"></canvas>;
};

export default BarChart;

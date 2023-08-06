import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DailyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'],
      datasets: [
        {
          label:'Ingresos',
          data: [100, 200, 150, 300, 250],
          backgroundColor: 'rgba(155,80,192, 0.6)',
          borderColor: 'rgba(155,80,192, 1)',
          borderWidth: 2,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(document.getElementById('dailyChart'), {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return <canvas id="dailyChart" width="auto" height="190"></canvas>;
};

export default DailyChart;

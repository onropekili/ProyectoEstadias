import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeeklyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [
        {
          label: 'Ingresos semanales',
          data: [1500, 1800, 2000, 2200],
          backgroundColor: 'rgba(74, 193, 224, 0.6)',
          borderColor: 'rgba(74, 193, 224, 1)',
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

    chartRef.current = new Chart(document.getElementById('weeklyChart'), {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return <canvas id="weeklyChart" width="auto" height="190"></canvas>;
};

export default WeeklyChart;

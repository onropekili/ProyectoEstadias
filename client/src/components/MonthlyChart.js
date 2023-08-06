import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MonthlyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Ingresos mensuales',
          data: [5000, 4800, 5300, 6000, 5500, 7000],
          backgroundColor: 'rgba(112, 212, 75, 0.6)',
          borderColor: 'rgba(112, 212, 75, 1)',
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

    chartRef.current = new Chart(document.getElementById('monthlyChart'), {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return <canvas id="monthlyChart" width="auto" height="190"></canvas>;
};

export default MonthlyChart;

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment'; 
import './charts.scss';
import { useTheme } from '../Themecontext/Theme';

const ChartComponent = ({ jsonData }) => {
  const chartRef = useRef(null);
  const { isDarkMode } = useTheme();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!jsonData) return;

    const lastThirtyDaysData = jsonData.prices.filter(price => {
      const timestamp = new Date(price[0]);
      const today = new Date();
      const thirtyDaysAgo = new Date(today);
      thirtyDaysAgo.setDate(today.getDate() - 30); // Subtract thirty days
      return timestamp >= thirtyDaysAgo;
    });

    const data = {
      labels: [],
      datasets: [{
        data: [],
        borderColor: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(75, 192, 192)',
        fill: false
      }]
    };

    lastThirtyDaysData.forEach(price => {
      const timestamp = new Date(price[0]);
      data.labels.push(timestamp);
      data.datasets[0].data.push(price[1]);
    });

    const ctx = chartRef.current.getContext('2d');
    
    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          x: {
            type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          },
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Price'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Bitcoin Price in the Last 30 Days',
            padding: {
              top: 10,
              bottom: 10
            }
          },
          legend: {
            display: false
          }
        }
      }
    });

    return () => {
      // Clean up the chart instance on component unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };

  }, [jsonData, isDarkMode]);

  return (
    <div className={`full ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="Container" style={{ width: '80%', margin: '0 auto' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default ChartComponent;

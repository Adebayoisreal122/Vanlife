import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HostIncome = () => {
  const chartRef = useRef(null); // Create a ref to hold the canvas element

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d'); // Get the 2D context of the canvas element

    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green","blue","orange","brown"];

    new Chart(ctx, { // Pass ctx (2D context) instead of "myChart"
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {} // You can customize options here if needed
    });
  }, []);

  return (
    <>
      <canvas ref={chartRef} id="myChart"></canvas> {/* Assign ref to the canvas element */}
    </>
  );
};

export default HostIncome;

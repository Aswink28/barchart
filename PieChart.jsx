import React from "react";
import "./Demo.css"; // Using the same corner-box CSS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const labels = ["1", "2", "3", "4", "5", "6", "7"];

  const data = {
    labels,
    datasets: [
      {
        label: "Load",
        data: [5.2, 4.8, 5.9, 6.2, 5.3, 6.8, 6.0],
        backgroundColor: "#00e5ff",
      },
      {
        label: "Spend",
        data: [4.7, 4.4, 5.1, 5.5, 5.0, 5.9, 6.0],
        backgroundColor: "#ff5252",
      },
    ],
  };
  const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Daily Load vs Spend (7 Days)",
      color: "#00d4aa",
      font: {
        size: 14,
        weight: '600', // semi-bold like h4
      },
      align: "start",
      padding: {
        top: 10,    // move slightly above
        bottom: 40, // space below title
      },
    },
    tooltip: {
      enabled: false, // disable default tooltip
      external: function(context) {
        let tooltipEl = document.getElementById('chartjs-tooltip');

        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.style.background = '#11161a';
          tooltipEl.style.border = '1px solid #50887dff';
          tooltipEl.style.borderRadius = '20px';
          tooltipEl.style.color = 'white';
          tooltipEl.style.opacity = 1;
          tooltipEl.style.pointerEvents = 'none';
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.transition = 'all .1s ease';
          tooltipEl.style.padding = '10px';
          tooltipEl.style.fontSize = '13px';
          tooltipEl.style.fontFamily = 'Arial, sans-serif';
          document.body.appendChild(tooltipEl);
        }

        const tooltipModel = context.tooltip;

        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        if (tooltipModel.body) {
          const title = tooltipModel.title[0]; // Day label
          const bodyLines = tooltipModel.dataPoints;
          const load = bodyLines[0].raw;
          const spend = bodyLines[1].raw;

          tooltipEl.innerHTML = `
            <div style="margin-bottom:5px;">Day ${title}</div>
            <div style="color:#00d4aa;">Loaded: ₹${load}M</div>
            <div style="color:#ff5252;">Spent: ₹${spend}M</div>
          `;
        }

        const canvasRect = context.chart.canvas.getBoundingClientRect();
        tooltipEl.style.left = canvasRect.left + window.pageXOffset + tooltipModel.caretX + 'px';
        tooltipEl.style.top = canvasRect.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.offsetHeight - 10 + 'px';
        tooltipEl.style.opacity = 1;
      }
    },
  },
  scales: {
    x: {
      grid: {
        drawTicks: true,
        drawOnChartArea: false,
        color: "#11161A",
      },
      ticks: { color: "#ccc" },
      border: { color: "#ccc" },
    },
    y: {
      grid: {
        drawTicks: true,
        drawOnChartArea: false,
        color: "#ccc",
      },
      ticks: {
        callback: (value) => `₹${value.toFixed(1)}M`,
        color: "#ccc",
      },
      border: { color: "#ccc" },
    },
  },
};


//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     plugins: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "Daily Load vs Spend (7 Days)",
//         color: "#00d4aa",
//         font: { size: 14,
//              weight: '600',
//          },
//         align: "start",
//         padding: {
//     top: 10,             // move it slightly above
//     bottom: 40,          // optional, space below the title
//   },
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: { drawTicks: true, drawOnChartArea: false, color: "#11161A" },
//         ticks: { color: "#ccc" },
//         border: { color: "#ccc" },
//       },
//       y: {
//         grid: { drawTicks: true, drawOnChartArea: false, color: "#ccc" },
//         ticks: { callback: (value) => `₹${value.toFixed(1)}M`, color: "#ccc" },
//         border: { color: "#ccc" },
//       },
//     },
//   };

  const verticalHighlight = {
    id: "verticalHighlight",
    beforeDatasetsDraw(chart) {
      const { ctx, tooltip, chartArea: { top, bottom }, scales: { x } } = chart;
      if (!tooltip?.opacity || !tooltip.dataPoints?.length) return;
      const index = tooltip.dataPoints[0].dataIndex;
      const tickWidth = index < x.ticks.length - 1
        ? x.getPixelForTick(index + 1) - x.getPixelForTick(index)
        : x.getPixelForTick(index) - x.getPixelForTick(index - 1);
      const barCenter = x.getPixelForTick(index);
      ctx.save();
      ctx.fillStyle = "#A2A2A2";
      ctx.fillRect(barCenter - tickWidth / 2, top, tickWidth, bottom - top);
      ctx.restore();
    },
  };

  const verticalTicks = {
    id: "verticalTicks",
    afterDraw(chart) {
      const { ctx, chartArea: { bottom }, scales: { x } } = chart;
      ctx.save();
      const tickHeight = 8;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      x.ticks.forEach((_, index) => {
        const xPos = x.getPixelForTick(index);
        ctx.beginPath();
        ctx.moveTo(xPos, bottom);
        ctx.lineTo(xPos, bottom + tickHeight);
        ctx.stroke();
      });
      ctx.restore();
    },
  };

  return (
    <div className="corner-box" style={{ height: "350px", padding: "20px", marginLeft: "250px" }}>
      <span></span>
      <Bar data={data} options={options} plugins={[verticalHighlight, verticalTicks]} />
    </div>
  );
};

export default BarChart;

import React, { useEffect, useState } from "react";
import "./Demo.css"; // Your corner-box CSS
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
  // State to hold dynamic chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Dummy JSON data
  const dummyData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    load: [5.2, 4.8, 5.9, 6.2, 5.3, 6.8, 6.0],
    spend: [4.7, 4.4, 5.1, 5.5, 5.0, 5.9, 6.0],
  };

  useEffect(() => {
    // Simulate fetching data from backend
    const data = dummyData; // replace this with fetch() if you have real API
    setChartData({
      labels: data.labels,
      datasets: [
        {
          label: "Load",
          data: data.load,
          backgroundColor: "#00e5ff",
        },
        {
          label: "Spend",
          data: data.spend,
          backgroundColor: "#ff5252",
        },
      ],
    });
    
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Daily Load vs Spend (7 Days)",
        color: "#00d4aa",
        font: { size: 14, weight: "200" },
        align: "start",
        padding: { top: 10, bottom: 40 },
      },
      tooltip: {
        enabled: false, // custom tooltip
        external: function (context) {
          let tooltipEl = document.getElementById("chartjs-tooltip");
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.background = "#11161a";
            tooltipEl.style.border = "1px solid #50887dff";
            tooltipEl.style.borderRadius = "20px";
            tooltipEl.style.color = "white";
            tooltipEl.style.opacity = 1;
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.transition = "all .1s ease";
            tooltipEl.style.padding = "10px";
            tooltipEl.style.fontSize = "13px";
            tooltipEl.style.fontFamily = "Arial, sans-serif";
            document.body.appendChild(tooltipEl);
          }

          const tooltipModel = context.tooltip;

          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          if (tooltipModel.body) {
            const title = tooltipModel.title[0];
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
          tooltipEl.style.left =
            canvasRect.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top =
            canvasRect.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.offsetHeight - 10 + "px";
          tooltipEl.style.opacity = 1;
        },
      },
    },
    scales: {
      x: { grid: { drawTicks: true, drawOnChartArea: false, color: "#11161A" }, ticks: { color: "#7C828D" }, border: { color: "#7C828D" } },
      y: {
        grid: { drawTicks: true, drawOnChartArea: false, color: (ctx) => (ctx.tick.value % 2 === 0 ? "#7C828D" : "transparent") },
        ticks: { callback: (v) => (v % 2 === 0 ? `₹${v.toFixed(1)}M` : ""), color: "#7C828D" },
        min: 0,
        max: 8,
        stepSize: 1,
        border: { color: "#7C828D" },
      },
    },
  };

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
      ctx.strokeStyle = "#7C828D";
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
      <Bar data={chartData} options={options} plugins={[verticalHighlight, verticalTicks]} />
    </div>
  );
};

export default BarChart;

import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// register required controllers
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWithLeaderLines = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy(); // ✅ destroy old instance
    }

    const data = {
      labels: ["Product A", "Product B", "Product C", "Product D"],
      datasets: [
        {
          data: [40, 25, 20, 15],
          backgroundColor: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"],
          borderColor: "#0b1220",
          borderWidth: 2,
          radius: "72%",
        },
      ],
    };

    let animationDone = false;

    const leaderLinesPlugin = {
      id: "leaderLines",
      afterDatasetsDraw(chart) {
        if (!animationDone || chart.animating) return;

        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        const ds = chart.data.datasets[0];
        if (!meta || !meta.data) return;

        const total = ds.data.reduce((s, v) => s + v, 0);

        ctx.save();
        ctx.lineWidth = 1.5;
        ctx.font = "12px Arial";
        ctx.textBaseline = "middle";

        meta.data.forEach((arc, i) => {
          const mid = (arc.startAngle + arc.endAngle) / 2;
          const cx = arc.x,
            cy = arc.y,
            outer = arc.outerRadius;

          const edgeX = cx + Math.cos(mid) * outer;
          const edgeY = cy + Math.sin(mid) * outer;

          const offset = 40;
          const lineEndX = cx + Math.cos(mid) * (outer + offset);
          const lineEndY = cy + Math.sin(mid) * (outer + offset);

          ctx.strokeStyle = ds.backgroundColor[i];
          ctx.fillStyle = ds.backgroundColor[i];

          ctx.beginPath();
          ctx.moveTo(edgeX, edgeY);
          ctx.lineTo(lineEndX, lineEndY);
          ctx.stroke();

          const val = ds.data[i];
          const pct = Math.round((val / total) * 100);
          const text = `${chart.data.labels[i]} — ${val} (${pct}%)`;

          ctx.textAlign = Math.cos(mid) >= 0 ? "left" : "right";
          const pad = 6;
          ctx.fillText(
            text,
            lineEndX + (Math.cos(mid) >= 0 ? pad : -pad),
            lineEndY
          );
        });
        ctx.restore();
      },
    };

    chartRef.current = new ChartJS(ctx, {
      type: "pie",
      data,
      options: {
        rotation: 90, // start at 90°
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          onComplete: () => {
            animationDone = true;
            chartRef.current.draw();
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
      },
      plugins: [leaderLinesPlugin],
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "560px", height: "420px", background: "#0f1624", borderRadius: "12px", padding: "18px" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PieChartWithLeaderLines;

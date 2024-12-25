import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

function DashboardChart() {
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState({
    data: [
      { month: "Jan", iceCreamSales: 162000 },
      { month: "Mar", iceCreamSales: 302000 },
      { month: "May", iceCreamSales: 800000 },
      { month: "Jul", iceCreamSales: 1254000 },
      { month: "Sep", iceCreamSales: 950000 },
      { month: "Nov", iceCreamSales: 200000 },
    ],
    series: [
      {
        type: "line",
        xKey: "month",
        yKey: "iceCreamSales",
        stroke: "#4C1D95", // Line color matching Tailwind's text-purple-900
        marker: {
          fill: "#4C1D95", // Marker color matching line color
          stroke: "#4C1D95",
        },
        label: {
          enabled: false, // Disables series labels
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          color: "#FFFFFF", // X-axis text color
        },
        title: {
          enabled: false, // Hides X-axis title
        },
      },
      {
        type: "number",
        position: "left",
        label: {
          color: "#FFFFFF", // Y-axis text color
        },
        title: {
          enabled: false, // Hides Y-axis title
        },
      },
    ],
    background: {
      visible: false, // Transparent background
    },
    overlays: {
      loading: {
        text: "Some custom loading message",
      },
      noData: {
        text: "Some custom noData message",
      },
      noVisibleSeries: {
        text: "Some custom noVisibleSeries message",
      },
      unsupportedBrowser: {
        text: "Some custom unsupportedBrowser message",
      },
    },
  });

  return (
    <div className="p-5 hover:shadow-lg hover:shadow-purple-900  dashboard-chart w-full flex flex-col gap-10 rounded-lg ">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl">Total Users</h2>
        <p className="text-gray-500 text-2xl">1000</p>
        <span className="text-xl">
          <span className="text-green-500"> +10 </span> since yesterday
        </span>
      </div>
      <AgCharts
        style={{ width: "80%", height: "180px" }}
        options={chartOptions}
      />
    </div>
  );
}

export default DashboardChart;

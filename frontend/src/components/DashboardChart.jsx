import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

function DashboardChart({ title, data }) {
  // Chart Options: Control & configure the chart
  console.log(title,data)
  const [currentData,setCurrentData] = useState({})
  const [chartOptions, setChartOptions] = useState({
    data: [],
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
  });

  useEffect(()=>{
    setCurrentData(data)
  },[])

  return (
    <div className="p-5 hover:shadow-lg hover:shadow-purple-900 dashboard-chart w-full flex flex-col gap-10 rounded-lg ">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-gray-500 text-2xl">
          {currentData.users.length } 
        </p>
        <span className="text-xl">
          <span className="text-green-500">
            {currentData.ThisWeekUsers.length } 
          </span>{" "}
          since last week
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

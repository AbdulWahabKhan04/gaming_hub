import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

function DashboardChart({ title, data }) {
  const [currentData, setCurrentData] = useState({
    users: [],
    ThisWeekUsers: [],
  });

  const [chartOptions, setChartOptions] = useState({
    data: [], // Initially empty
    series: [
      {
        type: "line",
        xKey: "month", // x-axis key
        yKey: "iceCreamSales", // y-axis key
        stroke: "#4C1D95",
        marker: {
          fill: "#4C1D95",
          stroke: "#4C1D95",
        },
        label: {
          enabled: false,
        },
      },
    ],
    axes: [
      {
        type: "category", // x-axis type
        position: "bottom",
        label: {
          color: "#FFFFFF",
        },
        title: {
          enabled: false,
        },
      },
      {
        type: "number", // y-axis type
        position: "left",
        label: {
          color: "#FFFFFF",
        },
        title: {
          enabled: false,
        },
      },
    ],
    background: {
      visible: false,
    },
  });

  useEffect(() => {
    // Update currentData when `data` changes
    if (data && data.users && data.ThisWeekUsers) {
      setCurrentData(data);

      // Prepare data for the chart
      const chartData = data.users.map((user, index) => ({
        month: `Month ${index + 1}`, // Example xKey
        iceCreamSales: user.sales || 0, // Example yKey
      }));

      // Update chartOptions with new data
      setChartOptions((prevOptions) => ({
        ...prevOptions,
        data: chartData, // Bind new data to the chart
      }));
    } else {
      console.warn("Invalid data passed to DashboardChart:", data);
    }
  }, [data]);

  return (
    <div className="p-5 hover:shadow-lg hover:shadow-purple-900 dashboard-chart w-full flex flex-col gap-10 rounded-lg">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-gray-500 text-2xl">{currentData.users.length}</p>
        <span className="text-xl">
          <span className="text-green-500">
            {currentData.ThisWeekUsers.length}
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

import React from "react";
import DashboardChart from "../../components/DashboardChart";
import {DataTable}  from "../../components/Shadcn/Table"
function Dashboard() {
  return (
    <div className="bg-gray-900 flex flex-col gap-20 rounded-lg min-h-screen p-5 w-full text-gray-300">
      <h1 className="text-4xl">
        Welcome <span className="text-purple-900"> Wahab Khan! </span>
      </h1>

      <div className="flex gap-5 max-lg:flex-col justify-evenly">
        <DashboardChart title={"Total Users"} />
        <DashboardChart />
        <DashboardChart />
      </div>

      <div className="flex gap-5 justify-center flex-col md:flex-row">
        <DataTable />
        <DataTable />
        <DataTable />
      </div>
    </div>
  );
}

export default Dashboard;

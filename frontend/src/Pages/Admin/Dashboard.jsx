import React from "react";
import DashboardChart from "../../components/DashboardChart";
import {DataTable}  from "../../components/Shadcn/Table"
function Dashboard() {
  return (
    <div className="bg-gray-900 flex flex-col gap-10 rounded-lg min-h-screen max-lg:p-20 p-5 w-full text-gray-300">
      <h1 className="text-4xl">
        Welcome <span className="text-purple-900"> Wahab Khan! </span>
      </h1>

      <div className="flex gap-5 max-lg:gap-20 max-lg:flex-col justify-evenly">
        <DashboardChart title={"Total Users"} />
        <DashboardChart />
        <DashboardChart />
      </div>

        <h1 className="text-4xl text-center">Recent Data Record</h1>
      <div className="flex gap-5 max-lg:gap-20 justify-center  flex-col lg:flex-row items-center">
        <DataTable />
        <DataTable />
        <DataTable />
      </div>
    </div>
  );
}

export default Dashboard;

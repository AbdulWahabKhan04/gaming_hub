import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardChart from "../../components/DashboardChart";
import { DataTable } from "../../components/Shadcn/Table";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [fetchedData, setFetchedData] = useState({
    users: [],
    ThisWeekUsers: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/getUsers");
        setFetchedData({
          users: res.data.users,
          ThisWeekUsers: res.data.ThisWeekUsers,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-900 flex flex-col gap-10 rounded-lg min-h-screen max-lg:p-20 p-5 w-full text-gray-300">
      <h1 className="text-4xl">
        Welcome{" "}
        <span className="text-purple-900"> {currentUser.username}! </span>
      </h1>

      <div className="flex gap-5 max-lg:gap-20 max-lg:flex-col justify-evenly">
        <DashboardChart title="Total Users" data={fetchedData} />
        <DashboardChart title="Total Users" data={fetchedData} />
        <DashboardChart title="Total Users" data={fetchedData} />
      </div>

      <h1 className="text-4xl text-center">Recent Data Record</h1>
      <div className="flex gap-5 max-lg:gap-20 justify-center flex-col lg:flex-row items-center">
        <DataTable />
        <DataTable />
        <DataTable />
      </div>
    </div>
  );
}

export default Dashboard;

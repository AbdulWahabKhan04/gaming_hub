import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DashboardChart from "../../components/DashboardChart";
import { DataTable } from "../../components/Shadcn/Table";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [FetchedData, setFetchedData] = useState({
    data: [],
    ThisMonthData: [],
  });

  const [productData, setProductData] = useState({
    data: [],
    ThisMonthData: [],
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/getUsers");
        setFetchedData({
          data: res.data.users,
          ThisMonthData: res.data.ThisWeekUsers,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/product/getProducts"
        );
        setProductData({
          title: "products",
          data: res.data.products,
          ThisMonthData: res.data.ThisMonthProducts,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-900 flex flex-col gap-10 rounded-lg min-h-screen max-lg:p-20 p-5 w-full text-gray-300">
      <h1 className="text-4xl">
        Welcome{" "}
        <span className="text-purple-900"> {currentUser.username}! </span>
      </h1>

      <div className="flex gap-5 max-lg:gap-20 max-lg:flex-col justify-evenly">
        <DashboardChart title="Total Users" data={FetchedData} />
        {productData && (
          <DashboardChart title="Total Products" data={productData} />
        )}
        <DashboardChart title="Total Users" data={FetchedData} /> 
      </div>

      <h1 className="text-4xl text-center">Recent Data Record</h1>
      <div className="flex flex-wrap gap-20 max-lg:gap-20 justify-center flex-col lg:flex-row items-center">
        <DataTable />
        <DataTable />
        <DataTable />
      </div>
    </div>
  );
}

export default Dashboard;

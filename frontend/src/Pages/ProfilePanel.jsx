import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/UI/Sidebar";
import Dashboard from "./Admin/Dashboard";

function ProfilePanel() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } else {
      setTab("profile");
    }
  }, [location.search]);
  console.log(tab);

  return (
    <div className="h-min-screen p-5 gap-5 bg-gray-800 max-md:items-center  flex flex-col lg:flex-row">
      <Sidebar />

      {tab === "profile" && <div>Profile Panel</div>}
      {tab === "dashboard" && <Dashboard />}
    </div>
  );
}

export default ProfilePanel;

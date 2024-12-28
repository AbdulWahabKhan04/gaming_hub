import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/UI/Sidebar";
import Dashboard from "./Admin/Dashboard";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function ProfilePanel() {
  const location = useLocation();
  const {currentUser} = useSelector((state) => state.user)
  const [tab, setTab] = useState("");
  const navigateTo = useNavigate()
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } else {
      setTab("profile");
    }
  }, [location.search]);
  
  useEffect(()=>{
    if(!currentUser){
      toast.error("Please Login First to access the panel!")
      navigateTo('/')
    }
  },[currentUser])
  
  return (
    <div className="h-min-screen p-5 gap-5 bg-gray-800 max-lg:items-center flex flex-col lg:flex-row">
      <Sidebar />

      {tab === "profile" && <div>Profile Panel</div>}
      {tab === "dashboard" && <Dashboard />}
    </div>
  );
}

export default ProfilePanel;

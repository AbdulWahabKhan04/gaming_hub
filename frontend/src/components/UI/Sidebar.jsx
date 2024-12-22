import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrHistory, GrPowerShutdown } from "react-icons/gr";
import { CgChart, CgProductHunt, CgProfile, CgRecord } from "react-icons/cg";
import { TbCategory, TbJewishStar } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
function Sidebar() {
  const [role, setRole] = useState("admin");
  return (
    <div className="flex flex-col h-max pb-32 p-10 rounded-lg m-5 items-center bg-gray-900 gap-5 w-96">
      <div className="profileArea items-center flex flex-col">
        <img
          className="w-40 h-40 mb-5 rounded-full"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
          alt="Profile"
        />
        <h4 className="font-bold text-2xl text-gray-300">Wahab Khan</h4>
        <p className="font-semibold text-lg text-gray-500">@username</p>
      </div>

      <div className="sidebarItems flex w-full flex-col gap-10">
        {role === "admin" && (
          <>
            <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
              {/* Updated Link */}
              <CgChart />
              <Link className="" to="/admin/dashboard">
                DASHBOARD
              </Link>
            </div>

            <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
              {/* Updated Link */}
              <CgProductHunt />
              <Link className="" to="/admin/dashboard">
                PRODUCTS
              </Link>
            </div>

            <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
              {/* Updated Link */}
              <TbCategory />
              <Link className="" to="/admin/dashboard">
                CATEGORIES
              </Link>
            </div>

            <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
              {/* Updated Link */}
              <GrHistory />
              <Link className="" to="/admin/dashboard">
                RECORD
              </Link>
            </div>
          </>
        )}

        <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
          {/* Updated Link */}
          <CgProfile />
          <Link className="" to="/profile?tab=profile">
            PROFILE
          </Link>
        </div>
        <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
          {/* Updated Link */}
          <TbJewishStar />
          <Link className="" to="/profile?tab=profile">
            WISHLIST
          </Link>
        </div>
        <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
          {/* Updated Link */}
          <CiShoppingCart />
          <Link className="" to="/profile?tab=profile">
            PRODUCTS PURCHASED
          </Link>
        </div>
        <div className="sideBarItem  py-2 text-center hover:bg-purple-900 hover:text-white items-center justify-center border-b border-white text-gray-300 flex gap-2 w-full">
          {/* Updated Link */}
          <GrPowerShutdown />
          <Link className="" to="/profile?tab=profile">
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
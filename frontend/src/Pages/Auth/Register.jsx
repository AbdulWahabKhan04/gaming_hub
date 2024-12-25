import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="bg-gray-900 p-5 flex justify-center items-center h-screen">
      <div className=" bg-black p-10 flex flex-col gap-10 rounded-lg">
        <div>
          <h1 className="text-4xl text-center text-white">
            Register <span className="text-purple-500">Now</span>!
          </h1>
          <h2 className="text-md text-white mt-2">
            Join now to be able to redeem your member bonus!
          </h2>
        </div>
        <div className="flex text-white flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-gray-900 p-2 mt-5 rounded-lg border-2 border-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-900 p-2 mt-5 rounded-lg border-2 border-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mt-5 bg-gray-900 rounded-lg border-2 border-purple-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 mt-5 bg-gray-900 border-purple-500 rounded-lg border-2 "
          />
          
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full p-2 mt-5 bg-gray-900 border-purple-500 rounded-lg border-2 "
          />
          <select className="w-full p-2 mt-5 bg-gray-900 border-purple-500 rounded-lg border-2" name="platform" id="platform">
          <option value={null}>Chose your platform</option>
          <option value="psn">Playstation</option>
          <option value="xbox">XBOX</option>
            <option value="steam">STEAM</option>
          </select>
        </div>
        <div>
          <p className="text-center text-gray-300 mt-5">
            Already have an account? <Link to={"/login"}><span className="text-purple-900 hover:text-purple-500">Login</span></Link>
          </p>
        <div className="flex justify-center mt-5">
          <button className="bg-purple-900 text-white p-4 hover:bg-purple-800 rounded-lg">
            Register
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

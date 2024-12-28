import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userSignin } from "../../Redux/UserSlice";

function Login() {
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();
  const navigateTo = useNavigate()

  const HandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const HandleLogin = async () => {
    toast("On It!", {
      icon: "⏳",
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        {
          withCredentials: true, 
        }
      );
      // console.log(response)
      dispatch(userSignin(response.data.user));
      toast.success(response.data.message);
      navigateTo("/")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="bg-gray-900 p-5 flex justify-center items-center h-screen">
      <div className=" bg-black p-10 flex flex-col gap-10 rounded-lg">
        <div>
          <h1 className="text-4xl text-center text-white">
            Login
            <span className="text-purple-500"> Now</span>!
          </h1>
          <h2 className="text-md text-white mt-2">
            Login now to view your collection and purchase content from the
            website!
          </h2>
        </div>
        <div className="flex text-white flex-col gap-2">
          <input
            onChange={HandleInputChange}
            id="username"
            type="text"
            placeholder="Username"
            className="w-full bg-gray-900 p-2 mt-5 rounded-lg border-2 border-purple-500"
          />

          <input
            onChange={HandleInputChange}
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 mt-5 bg-gray-900 rounded-lg border-2 border-purple-500"
          />
        </div>
        <div>
          <p className="text-gray-300">
            Forget your username?{" "}
            <span className="text-purple-900 hover:text-purple-500">
              Click me
            </span>
          </p>
          <p className="text-center text-gray-300 mt-5">
            Dont have an account?{" "}
            <Link to={"/register"}>
              <span className="text-purple-900 hover:text-purple-500">
                Register
              </span>
            </Link>
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={HandleLogin}
              className="bg-purple-900 text-white p-4 hover:bg-purple-800 rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

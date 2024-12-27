import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { userSignin } from "../../Redux/UserSlice";
function Register() {
  const [formData, setFormData] = useState(null);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const HandleRegister = async () => {
    toast("On It!",{
      icon: "⏳",
    })
    try {
      const profilePic = "https://avatar.iran.liara.run/public";
      const data = {
        ...formData,
        profilePic: profilePic,
      };
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        data
      );
      dispatch(userSignin(res.data.newUser));
      toast.success(res.data.message);
      navigateTo("/")
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
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
            onChange={HandleChange}
            type="text"
            id="username"
            placeholder="Username"
            className="w-full bg-gray-900 p-2 mt-5 rounded-lg border-2 border-purple-500"
          />
          <input
            onChange={HandleChange}
            type="email"
            id="email"
            placeholder="Email"
            className="w-full bg-gray-900 p-2 mt-5 rounded-lg border-2 border-purple-500"
          />
          <input
            onChange={HandleChange}
            id="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 mt-5 bg-gray-900 rounded-lg border-2 border-purple-500"
          />
          <input
            onChange={HandleChange}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 mt-5 bg-gray-900 border-purple-500 rounded-lg border-2 "
          />

          <input
            onChange={HandleChange}
            id="phone"
            type="text"
            placeholder="Contact Number"
            className="w-full p-2 mt-5 bg-gray-900 border-purple-500 rounded-lg border-2 "
          />
          <select
            onChange={HandleChange}
            className="w-full p-2 mt-5 bg-gray-900 border-purple-500 rounded-lg border-2"
            name="platform"
            id="platform"
          >
            <option value={null}>Chose your platform</option>
            <option value="psn">Playstation</option>
            <option value="xbox">XBOX</option>
            <option value="steam">STEAM</option>
          </select>
        </div>
        <div>
          <p className="text-center text-gray-300 mt-5">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-purple-900 hover:text-purple-500">
                Login
              </span>
            </Link>
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={HandleRegister}
              className="bg-purple-900 text-white p-4 hover:bg-purple-800 rounded-lg"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

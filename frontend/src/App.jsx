import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout/Layout";
import ProfilePanel from "./Pages/ProfilePanel";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import NewProduct from "./Pages/Admin/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={"/register"} element={<Register />} />
      <Route path={"/login"} element={<Login />} />
      <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/profile"} element={<ProfilePanel />} />
          <Route path="/products/new" element={<NewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

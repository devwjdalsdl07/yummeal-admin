import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import { accessTokenState } from "./atom/atom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Sider from "./components/Sider";
import AdminAddItem from "./pages/AdminAddItem";
import AdminItem from "./pages/AdminItem";
import AdminItemEdit from "./pages/AdminItemEdit";
import AdminLogin from "./pages/AdminLogin";
import BestSellProd from "./pages/BestSellProd";
import Delivery from "./pages/Delivery";
import Main from "./pages/Main";
import OrderDetail from "./pages/OrderDetail";
import OrderStatus from "./pages/OrderStatus";
import SalesStatus from "./pages/SalesStatus";
import UserList from "./pages/UserList";

const App = () => {
  const [accessToken, setAccessToken] = useRecoilState<any>(accessTokenState);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const test = localStorage.getItem("accessToken");
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  return (
    <div className="wrap">
      <Sider />
      <Layout>
        <Header />
        <Routes>
          <Route path="/admin" element={accessToken ? <Main /> : <AdminLogin />} />
          <Route
            path="/admin/userlist"
            element={accessToken ? <UserList /> : <AdminLogin />}
          />
          <Route
            path="/admin/delivery"
            element={accessToken ? <Delivery /> : <AdminLogin />}
          />
          <Route
            path="/admin/bestsale"
            element={accessToken ? <BestSellProd /> : <AdminLogin />}
          />
          <Route
            path="/admin/salestatus"
            element={accessToken ? <SalesStatus /> : <AdminLogin />}
          />
          <Route
            path="/admin/orderstatus"
            element={accessToken ? <OrderStatus /> : <AdminLogin />}
          />
          <Route
            path="/admin/orderdetail"
            element={accessToken ? <OrderDetail /> : <AdminLogin />}
          />
          <Route
            path="/admin/adminadd"
            element={accessToken ? <AdminAddItem /> : <AdminLogin />}
          />
          <Route path="/admin/adminlogin" element={<AdminLogin />} />
          <Route
            path="/admin/adminitem"
            element={accessToken ? <AdminItem /> : <AdminLogin />}
          />
          <Route
            path="/admin/adminitemedit"
            element={accessToken ? <AdminItemEdit /> : <AdminLogin />}
          />
        </Routes>
      </Layout>
    </div>
  );
};
export default App;

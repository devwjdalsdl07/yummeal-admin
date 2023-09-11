import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import AdminAddItem from "./pages/AdminAddItem";
import AdminLogin from "./pages/AdminLogin";
import AdminItem from "./pages/AdminItem";
import AdminItemEdit from "./pages/AdminItemEdit";
import BestSellProd from "./pages/BestSellProd";
import SalesStatus from "./pages/SalesStatus";
import OrderStatus from "./pages/OrderStatus";
import OrderDetail from "./pages/OrderDetail";
import "./App.css";
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import Layout from "./components/Layout";
import Sider from "./components/Sider";
import UserList from "./pages/UserList";
import Header from "./components/Header";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessTokenState } from "./atom/atom";
const App = () => {
  const [accessToken, setAccessToken] = useRecoilState<any>(accessTokenState);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const test = localStorage.getItem("accessToken");
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);
  return (
    <div className="warp">
      <Sider />
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={accessToken ? <Main /> : <AdminLogin />} />
          <Route
            path="/userlist"
            element={accessToken ? <UserList /> : <AdminLogin />}
          />
          <Route
            path="/delivery"
            element={accessToken ? <Delivery /> : <AdminLogin />}
          />
          <Route
            path="/bestsale"
            element={accessToken ? <BestSellProd /> : <AdminLogin />}
          />
          <Route
            path="/salestatus"
            element={accessToken ? <SalesStatus /> : <AdminLogin />}
          />
          <Route
            path="/orderstatus"
            element={accessToken ? <OrderStatus /> : <AdminLogin />}
          />
          <Route
            path="/orderdetail"
            element={accessToken ? <OrderDetail /> : <AdminLogin />}
          />
          <Route
            path="/adminadd"
            element={accessToken ? <AdminAddItem /> : <AdminLogin />}
          />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/adminitem"
            element={accessToken ? <AdminItem /> : <AdminLogin />}
          />
          <Route
            path="/adminitemedit"
            element={accessToken ? <AdminItemEdit /> : <AdminLogin />}
          />
        </Routes>
      </Layout>
    </div>
  );
};
export default App;

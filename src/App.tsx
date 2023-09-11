import BestSellProd from "./pages/BestSellProd";
import SalesStatus from "./pages/SalesStatus";
import OrderStatus from "./pages/OrderStatus";
import Header from "./components/Header";
import OrderDetail from "./pages/OrderDetail";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import Layout from "./components/Layout";
import Sider from "./components/Sider";

import React from "react";
import AdminAddItem from "./pages/AdminAddItem";
import AdminLogin from "./pages/AdminLogin";
import AdminItem from "./pages/AdminItem";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="wrap">
      <Sider />
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/best" element={<BestSellProd />} />
          <Route path="/salestatus" element={<SalesStatus />} />
          <Route path="/orderstatus" element={<OrderStatus />} />
          <Route path="/orderdetail" element={<OrderDetail />} />
          <Route path="/adminadd" element={<AdminAddItem />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminitem" element={<AdminItem />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

import React from "react";
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
const App = () => {
  return (
    <div className="warp">
      <Sider />
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/bestsale" element={<BestSellProd />} />
          <Route path="/salestatus" element={<SalesStatus />} />
          <Route path="/orderstatus" element={<OrderStatus />} />
          <Route path="/orderdetail" element={<OrderDetail />} />
          <Route path="/adminadd" element={<AdminAddItem />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminitem" element={<AdminItem />} />
          <Route path="/adminitemedit" element={<AdminItemEdit />} />
        </Routes>
      </Layout>
    </div>
  );
};
export default App;

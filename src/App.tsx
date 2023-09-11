import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import NotFound from "./pages/NotFound";
import OrderDetail from "./pages/OrderDetail";
import OrderStatus from "./pages/OrderStatus";
import SalesStatus from "./pages/SalesStatus";
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

const App = () => {
  const [isLogin, setIsLogin] = useState<string | null>(null);
  const Token = localStorage.getItem("accessToken");
  useEffect(() => {
    setIsLogin(Token);
  }, [Token]);


  return (
    <div className="wrap">
      {isLogin && <Sider />}
      <Layout>
        {isLogin && <Header setIsLogin={setIsLogin}/>}
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

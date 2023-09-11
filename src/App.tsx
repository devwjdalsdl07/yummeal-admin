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
          <Route path="/" element={isLogin ? <Main /> : <AdminLogin setIsLogin={setIsLogin}/>} />
          {isLogin ? (
            <>
              <Route path="/main" element={<Main />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/bestsale" element={<BestSellProd />} />
              <Route path="/salestatus" element={<SalesStatus />} />
              <Route path="/orderstatus" element={<OrderStatus />} />
              <Route path="/orderdetail" element={<OrderDetail />} />
              <Route path="/adminadd" element={<AdminAddItem />} />
              <Route path="/adminitem" element={<AdminItem />} />
              <Route path="/adminitemedit" element={<AdminItemEdit />} />
              <Route path="/*" element={<NotFound />} />
            </>
          ) : (
            <Route path="/*" element={<AdminLogin setIsLogin={setIsLogin}/>} />
          )}
        </Routes>
      </Layout>
    </div>
  );
};
export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import BestSellProd from "./pages/BestSellProd";
import SalesStatus from "./pages/SalesStatus";
import OrderStatus from "./pages/OrderStatus";
import Header from "./components/Header";

function App() {
  return (
    <div className="root-wrap">
    <Header/>
    <Routes>
      <Route path="/best" element={<BestSellProd />} />
      <Route path="/salestatus" element={<SalesStatus />} />
      <Route path="/orderstatus" element={<OrderStatus />} />
    </Routes>
    </div>
  );
}

export default App;

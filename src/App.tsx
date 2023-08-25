import { Route, Routes } from "react-router";
import "./App.css";
import BestSellProd from "./pages/BestSellProd";
import SalesStatus from "./pages/SalesStatus";

function App() {
  return (
    <Routes>
      <Route path="/best" element={<BestSellProd />} />
      <Route path="/salestatus" element={<SalesStatus />} />
    </Routes>
  );
}

export default App;

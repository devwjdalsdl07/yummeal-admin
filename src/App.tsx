import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import Layout from "./components/Layout";
import Sider from "./components/Sider";
import Header from "./components/Header";

function App() {
  return (
    <div className="warp">
      <Sider />
      <Layout>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;

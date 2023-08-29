
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Delivery from "./pages/Delivery";
import Layout from "./components/Layout";
import Sider from "./components/Sider";
import Header from "./components/Header";
import React from 'react'
import AdminAddItem from "./pages/AdminAddItem"
import AdminLogin from './pages/AdminLogin'
import AdminItem from './pages/AdminItem'


const App = () => {
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
    <Routes>
      <Route path='/adminadd' element={<AdminAddItem/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/adminitem" element={<AdminItem/>}/>
    </Routes>
  )
}

export default App
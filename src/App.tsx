import React from 'react'
import { Route, Routes } from 'react-router'
import AdminAddItem from "./pages/AdminAddItem"
import AdminLogin from './pages/AdminLogin'
import AdminItem from './pages/AdminItem'

const App = () => {
  return (
    <Routes>
      <Route path='/adminadd' element={<AdminAddItem/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/adminitem" element={<AdminItem/>}/>
    </Routes>
  )
}

export default App
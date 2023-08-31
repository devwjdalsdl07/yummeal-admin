import React from 'react'
import { Route, Routes } from 'react-router'
import AdminAddItem from "./pages/AdminAddItem"
import AdminLogin from './pages/AdminLogin'
import AdminItem from './pages/AdminItem'
import AdminItemEdit from './pages/AdminItemEdit'

const App = () => {
  return (
    <Routes>
      <Route path='/adminadd' element={<AdminAddItem/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/adminitem" element={<AdminItem/>}/>
      <Route path="/adminitemedit" element={<AdminItemEdit/>}/>
    </Routes>
  )
}

export default App
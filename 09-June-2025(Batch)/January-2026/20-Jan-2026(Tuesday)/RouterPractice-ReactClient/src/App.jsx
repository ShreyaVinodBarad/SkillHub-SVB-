import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import PublicNavbar from "./components/PublicNavbar"
import AdminNavbar from "./components/AdminNavbar"
import EmployeeNavbar from "./components/EmployeeNavbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminProfile from './pages/AdminProfile'
import EmployeeDashboard from './pages/EmployeeDashboard'
import EmployeeProfile from './pages/EmployeeProfile'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><PublicNavbar /><Outlet /></>}>
            <Route index element={<Home />} />
            <Route path='signin' element={<Login />} />
            <Route path='signup' element={<Register />} />
          </Route>
          <Route path='/admin' element={<><AdminNavbar /><Outlet /></>}>
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<AdminProfile />} />
          </Route>
          <Route path='/employee' element={<><EmployeeNavbar /><Outlet /></>}>
            <Route index element={<EmployeeDashboard />} />
            <Route path='profile' element={<EmployeeProfile />} />
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
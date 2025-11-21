import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import NavBar from './components/AdminNavBar'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Login from './pages/Login'
import AdminDashboard from "./pages/AdminDashboard"
import AdminEmployee from "./pages/AdminEmployee"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import AdminNavBar from './components/AdminNavBar'
import EmployeeNavbar from './components/EmployeeNavbar'

export const AuthContext = createContext()

const App = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<><AdminNavBar /><Outlet /></>}>
            {/* 👆 Outlet to render children */}
            <Route index element={<AdminDashboard />} />
            {/* <Route path='/admin/employee' element={<AdminEmployee />} /> */}
            <Route path='employee' element={<AdminEmployee />} />
          </Route>
          <Route path='/employee' element={<><EmployeeNavbar /> <Outlet /></>}>
            <Route index element={<EmployeeDashboard />} />
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App

/*
1) What is <Outlet />?
- Think of Outlet as a placeholder.
- It means:
“Put the child page here.”
- So inside /admin, Outlet will display:
/admin → AdminDashboard
/admin/employee → AdminEmployee
--------------------------------------------------------------
2) What is index Route?
<Route index element={...} /> means:
This is the default child page.
- So when you go to /admin, automatically the AdminDashboard will show.
- It is same as writing:
<Route path="" element={<AdminDashboard />} />
--------------------------------------------------------------
3) Put Together in Simple Words
a) Outlet → a space where child pages appear.
b) Nested Routes → routes inside another route.
c) Index Route → default page of that parent route.
--------------------------------------------------------------
*/ 
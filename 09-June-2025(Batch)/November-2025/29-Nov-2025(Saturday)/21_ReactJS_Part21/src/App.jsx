import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import NavBar from './components/AdminNavBar'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Home from "./pages/Home"
import AdminDashboard from "./pages/AdminDashboard"
import AuthorDashboard from "./pages/AuthorDashboard"
import AuthorRegistration from "./pages/AuthorRegistration"
import PublicNavBar from './components/PublicNavBar'
import PublicLayout from './components/PublicLayout'
import AdminLayout from './components/AdminLayout'
import AuthorLayout from './components/AuthorLayout'
import AdminAuthor from './pages/AdminAuthor'
import AdminBlogs from './pages/AdminBlogs'
import Login from './pages/Login'
import { createContext } from 'react'

export const AuthContext = createContext()

const App = () => {
  const [auth, setAuth] = useState({
    // admin:null,
    // author:null
    admin: JSON.parse(localStorage.getItem("local-admin")),
    author: JSON.parse(localStorage.getItem("local-author"))
    // 👆 To avoid navigation of Admin and Author Dashboard to login page after refresh.
  })
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* 
          <Route path='/' element={<><div>Home NavBar</div><Outlet /></>}> 
          */}
          {/* 
          <Route path='/' element={<><PublicNavBar /><Outlet /></>}> 
          */}
          <Route path='/' element={<PublicLayout />}>
            {/* Outlet => Renders child component/route */}
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<AuthorRegistration />} />
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='author' element={<AdminAuthor />} />
            <Route path='blogs' element={<AdminBlogs />} />
          </Route>
          <Route path='/author' element={<AuthorLayout />}>
            <Route index element={<AuthorDashboard />} />
          </Route>
          <Route path='*' element={<h1 className='alert alert-primary text-center'>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
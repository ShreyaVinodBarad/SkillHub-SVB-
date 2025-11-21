import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Protected from './components/Protected'
const App = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")))
  // Local Storage value after refresh 👆
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <NavBar authHandler={{ auth, setAuth }} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login authHandler={{ auth, setAuth }} />} />
          <Route path='/admin' element={<Protected authHandler={{ auth, setAuth }}><Dashboard /></Protected>} />
          <Route path='*' element={<h4 className='alert alert-primary text-center mt-3'>Page Not Found</h4>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
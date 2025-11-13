import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='*' element={<h1 className="alert alert-primary text-center mt-3">Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import Protected from './components/Protected'

export const AuthContext = createContext()

const App = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
  /*
  👆
  - It takes the value from localStorage (stored as "auth").
  - JSON.parse() converts that stored string back into an object.
  - setAuth is the function used to update auth.
  - Syntax:
  useState(JSON.parse(localStorage.getItem("key")))
  */
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/admin' element={<Dashboard />} /> */}
          <Route path='/admin' element={<Protected><Dashboard /></Protected>} />
          <Route path='*' element={<h3 className='alert alert-warning text-center mt-3'>Page Not Found</h3>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
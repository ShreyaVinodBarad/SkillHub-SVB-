import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Home from './pages/Home'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h4 className='alert alert-primary text-center mt-3'>Page Not Found</h4>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
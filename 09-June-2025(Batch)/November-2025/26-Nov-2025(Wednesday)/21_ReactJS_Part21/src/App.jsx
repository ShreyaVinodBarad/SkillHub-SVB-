import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1 className='alert alert-primary text-center'>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        < NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='*' element={<h3 className='alert alert-success mx-3 text-center mt-3'>Page Not Found</h3>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
/*
Data Flow 
a) CREATE PRODUCT FLOW
Form submit
→ dispatch(createProduct)
→ API POST
→ slice updates createSuccess
→ toast shows success
b) READ PRODUCT FLOW
page/limit change
→ dispatch(readProduct)
→ API GET
→ slice updates allProducts & total
→ table re-renders
c) Correct Learning Order (Follow This)
1) Setup React
2) Install packages
3) Create actions
4) Create slice
5) Create store
6) Wrap Provider
7) Build component
8) Test pagination
9) Add UI polish
*/ 
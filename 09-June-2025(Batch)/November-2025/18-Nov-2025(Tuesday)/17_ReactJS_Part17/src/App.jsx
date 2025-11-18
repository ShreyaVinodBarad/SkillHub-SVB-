import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import LearnContext from './pages/LearnContext'
import NavBar from './components/NavBar'
import PropsDrilling from './pages/PropsDrilling'

export const TestContext = createContext()

const App = () => {
  const brand = "Dell"
  return (
    <TestContext.Provider value={brand}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/context' element={<LearnContext />} />
          <Route path='/props' element={<PropsDrilling brand={brand} />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </TestContext.Provider>
  )
}

export default App
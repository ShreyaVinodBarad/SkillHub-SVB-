import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bank from './pages/Bank'
import Counter from './pages/Counter'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Bank />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
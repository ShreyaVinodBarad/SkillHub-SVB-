import React, { useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Protected from './components/Protected'
import LearnEffect from './pages/LearnEffect'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          {/* Public Pages 👇 */}
          <Route path='/' element={<Home />} />
          <Route path='/reach-us' element={<Contact />} />
          <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
          <Route path='/effect' element={<LearnEffect />} />

          {/* Private Pages 👇 */}
          <Route path='/admin' element={<Protected isLogin={isLogin}><Dashboard /></Protected>} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
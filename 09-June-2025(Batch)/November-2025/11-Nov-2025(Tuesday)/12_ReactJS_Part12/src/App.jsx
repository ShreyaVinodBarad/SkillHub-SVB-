import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './SkillHub/pages/Home'
import BasicToDo from './SkillHub/pages/BasicToDo'
import FormikToDo from './SkillHub/pages/FormikToDo'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import NavBar from './SkillHub/components/NavBar'
import BetterForm from './SkillHub/pages/BetterForm'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basic' element={<BasicToDo />} />
          <Route path='/formik' element={<FormikToDo />} />
          <Route path='/better' element={<BetterForm />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
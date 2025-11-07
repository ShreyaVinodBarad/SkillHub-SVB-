import React from 'react'
import LearnuseEffectHooks from './YouTube/LearnuseEffectHooks'
import FetchAndPromisesInReactJS from './YouTube/FetchAndPromisesInReactJS'
import AxiosInReactJS from './YouTube/AxiosInReactJS'
import Home from './SkillHub/pages/Home'
import LearnEffect from './SkillHub/pages/LearnEffect'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './SkillHub/components/NavBar'
import LearnAPI from './SkillHub/pages/LearnAPI'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const App = () => {
  return (
    <div>
      {/* SkillHub 👇 */}
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/effect' element={<LearnEffect />} />
          <Route path='/api' element={<LearnAPI />} />
          <Route path='*' element={<h1 className='alert alert-primary mx-3 my-3 text-center'>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>

      {/* YouTube 👇 */}
      {/* <LearnuseEffectHooks />
      <FetchAndPromisesInReactJS />
      <AxiosInReactJS /> */}
    </div >
  )
}

export default App
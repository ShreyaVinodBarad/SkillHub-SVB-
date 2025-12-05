import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
/*
npm i @reduxjs/toolkit
👆 This command installs Redux Toolkit in your React project.
*/

/*
1) Redux Toolkit
- Redux Toolkit is the easier and official way to use Redux.
- Redux Toolkit (RTK) is a set of tools that helps you use Redux faster, easier, and with less code.
a) Why we use Redux Toolkit?
- It reduces long and complicated code of Redux.
- It gives ready-made functions to create slices, actions, reducers.
- It avoids mistakes and makes Redux clean and modern.
- It works perfectly with React.
b) What it mainly provides?
createSlice → Makes actions + reducer together (simple).
configureStore → Creates store with less setup.
createAsyncThunk → For API calls easily.
c) In very short:
Redux Toolkit = Modern, faster, simpler version of Redux.
*/ 
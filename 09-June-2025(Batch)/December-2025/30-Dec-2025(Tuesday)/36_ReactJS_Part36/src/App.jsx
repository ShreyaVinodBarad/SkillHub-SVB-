import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import LearnState from "./pages/state/LearnState"
import LearnEffect from "./pages/effect/LearnEffect"
import LearnContext from "./pages/context/LearnContext"
import NavBar from "./components/NavBar"
import LearnChildComponent from './pages/test/LearnChildComponent'
import LearnuseMemo from './pages/performance/LearnuseMemo'
import LearnOnlyMemo from './pages/performance/LearnOnlyMemo'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><NavBar /><Outlet /></>}>
            <Route index element={<LearnState />} />
            <Route path='/effect' element={<LearnEffect />} />
            <Route path='/context' element={<LearnContext />} />
            <Route path='/child' element={<LearnChildComponent />} />
            <Route path='/performance' element={<LearnuseMemo />} />
            <Route path='/memo' element={<LearnOnlyMemo />} />
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
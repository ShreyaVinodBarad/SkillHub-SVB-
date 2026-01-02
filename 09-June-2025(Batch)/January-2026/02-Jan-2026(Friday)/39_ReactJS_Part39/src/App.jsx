import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Stat from "./pages/Stat"
import Demo from "./pages/Demo"
import NavBar from "./components/NavBar"
import { ErrorBoundary } from 'react-error-boundary'

const App = () => {
  const ErrorHandler = () => {
    return <h3 class="alert alert-danger mt-3">
      Something Went Wrong...
    </h3>
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><NavBar /><Outlet /></>}>
            <Route index element={<Home />} />
            <Route path='/stat' element={<Stat />} />
            <Route path='/demo' element={<ErrorBoundary FallbackComponent={ErrorHandler}><Demo /></ErrorBoundary>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
// npm i react-error-boundary
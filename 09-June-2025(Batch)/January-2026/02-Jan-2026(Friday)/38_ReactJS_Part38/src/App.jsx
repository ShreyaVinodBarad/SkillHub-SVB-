import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './Routes/AllRoutes'
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import NavBar from './components/NavBar'

const NavBar = lazy(() => import("./components/NavBar"))

const App = () => {
  return (
    <div>
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Suspense fallback={<h1>Please Wait...</h1>}><NavBar /><Outlet /></Suspense></>}>
            <Route index element={<Suspense fallback={<h1>Please Wait...</h1>}><Home /></Suspense>} />
            <Route path='/about' element={<Suspense fallback={<h1>Please Wait...</h1>}><About /></Suspense>} />
            <Route path='/contact' element={<Suspense fallback={<h1>Please Wait...</h1>}><Contact /></Suspense>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter> 
      */}

      {/* 
      <BrowserRouter>
        <Suspense fallback={<><div class="spinner-border text-primary"></div></>}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter> 
      */}

      <BrowserRouter>
        <Suspense fallback={<h1>Please Wait... ⏳</h1>}>
          <NavBar />
        </Suspense>
        <Routes>
          {
            publicRoutes.map(item => <Route path={item.path} element={
              <Suspense fallback={<h1>Please Wait... ⏳</h1>}>
                {item.element}
              </Suspense>} />)
          }
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
/*
Suspense Component gets load until we Home Page gets to About Page, till that period suspense get loaded on the screen for fraction fo seconds. fallback is the content we want to show when suspense get loaded.
*/ 
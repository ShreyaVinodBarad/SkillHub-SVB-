import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Account from "./pages/Account"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"

const App = () => {
  return (
    <div>
      {/* 
      👇 
      a) What this code does?
      - This is a React app using React Router to move between pages — Home, About, and Contact — without reloading the page.
      */}
      <BrowserRouter>
        {/* 👆 Wraps the whole app and enables routing. */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* 👆 to and path should have same value. */}
        {/*
        👆 
        - This code is using React Router links for navigation.
        - <Link> is used instead of <a> so the page doesn’t reload.
        to shows where to go — the path of the page.
        - Example:
        <Link to="/">Home</Link> → goes to homepage.
        <Link to="/about">About</Link> → goes to about page.
        <Link to="/contact">Contact</Link> → goes to contact page.
        - The comment means the to value and the path (in <Route path="/..." />) must be same — so the link correctly opens that route. 
        */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/gallery' element={<Gallery />} />
          <Route path='/account' element={<Account />} /> */}
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
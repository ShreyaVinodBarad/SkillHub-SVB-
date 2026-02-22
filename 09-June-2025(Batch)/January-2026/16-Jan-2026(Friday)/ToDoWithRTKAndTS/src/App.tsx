import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ToDo from "./pages/ToDo"
import Navbar from "./components/Navbar"
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="*" element={<h2>Page not found!</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
/*
📌 Packages to install:
npm i @reduxjs/toolkit react-redux react-router-dom react-toastify formik yup clsx
*/ 
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
const App = () => {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Outlet /></>}>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
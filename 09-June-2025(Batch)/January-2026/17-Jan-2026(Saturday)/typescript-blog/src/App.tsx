// 📌 Shortcut: srrouting 
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from "./../pages/Home";
import Register from "./../pages/Register";
import Login from "./../pages/Login";
import Dashboard from "./../pages/Dashboard";
import PublicNavBar from "./../components/PublicNavBar"
import AdminNavBar from "./../components/AdminNavBar"
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><PublicNavBar /><Outlet /></>}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Register />} />
            <Route path="signin" element={<Login />} />
          </Route>
          <Route path="/admin" element={<><AdminNavBar /><Outlet /></>}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App
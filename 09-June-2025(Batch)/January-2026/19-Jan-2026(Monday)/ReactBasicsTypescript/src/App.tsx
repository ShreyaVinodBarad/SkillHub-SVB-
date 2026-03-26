import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Details from "./pages/Details"
import Contact from "./pages/Contact"
import AdminNavBar from "./components/AdminNavBar"
import Dashboard from "./pages/Dashboard"
import AdminToDo from "./pages/AdminToDo"
import EmployeeNavBar from "./components/EmployeeNavBar"
import EmployeeDashboard from "./pages/EmployeeDashboard"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar /><Outlet /></>}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:id" element={<Details />} />
            {/* 
            👆
            - Uses a dynamic route parameter in React Router.
            a) What /:id means
            - :id is a variable (parameter) in the URL.
            - It allows you to pass different values dynamically. 
            b) Example URLs
            - This route will match:
            /details/1
            /details/45
            /details/abc
            - Here:
            1, 45, abc → all are values of id
            */}
          </Route>
          <Route path="/admin" element={<><AdminNavBar /><Outlet /></>}>
            <Route index element={<Dashboard />} />
            <Route path="todo" element={<AdminToDo />} />
          </Route>
          <Route path="/employee" element={<><EmployeeNavBar /><Outlet /></>}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
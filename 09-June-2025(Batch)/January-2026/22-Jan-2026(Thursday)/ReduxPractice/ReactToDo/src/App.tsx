import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ToDo from "./pages/ToDo"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Outlet /></>}>
            <Route index element={<Home />} />
            <Route path="todo" element={<ToDo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
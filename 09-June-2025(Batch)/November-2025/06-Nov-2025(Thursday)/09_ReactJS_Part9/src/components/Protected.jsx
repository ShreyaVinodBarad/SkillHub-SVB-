import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ isLogin, children }) => {
    return isLogin ? children : <Navigate to="/login" />
}

export default Protected
/*
Ways to navigate from one page to another page:
1) Navigate
- It is used inside JSX (return part) to move to another page.
- It automatically redirects when the condition is true.
- Example:
{isLoggedIn ? <Navigate to="/home" /> : <Login />}
- It redirects to /home page if the user is logged in.
-------------------------------------------------------------------
2) useNavigate
- It is a hook (function) used inside JavaScript logic, not inside JSX.
- We use it when we want to navigate on button click or after some action.
- Example:
const navigate = useNavigate();
navigate("/home");
- It sends the user to /home page.
-------------------------------------------------------------------
3) Navigate Component
- This is a component version of navigation (like <Navigate to="/home" />).
- Used for conditional redirection inside JSX.
- Example:
<Navigate to="/login" replace />
- It replaces the current page with /login page.
-------------------------------------------------------------------
4) Simple difference:
- useNavigate → used in functions or events.
- Navigate → used in JSX return part for conditional redirect.
-------------------------------------------------------------------
*/ 
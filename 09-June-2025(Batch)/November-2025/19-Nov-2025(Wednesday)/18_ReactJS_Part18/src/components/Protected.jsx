import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return (
        <div>
            {
                auth ? children : <Navigate to="/login" />
                /*
                👆
                - Navigate is used to redirect the user to another page.
                - Navigate is a component from React Router that automatically redirects the user to another route.
                */
            }
        </div>
    )
}

export default Protected
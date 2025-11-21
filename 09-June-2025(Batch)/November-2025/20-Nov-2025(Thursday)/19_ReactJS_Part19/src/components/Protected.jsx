import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children, authHandler }) => {
    const { auth } = authHandler
    return (
        <div>
            {
                auth ? children : <Navigate to="/login" />
            }
        </div>
    )
}

export default Protected
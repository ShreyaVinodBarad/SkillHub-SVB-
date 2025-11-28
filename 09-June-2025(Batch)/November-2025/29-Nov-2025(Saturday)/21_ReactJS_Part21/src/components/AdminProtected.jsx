import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return auth.admin ? children : <Navigate to="/login" />
    {/* 👆 Only when admin is logged than only show the Admin Dashboard when there is something in admin and if there is null in admin when we refresh the page than redirect to Login page. */ }
}

export default AdminProtected
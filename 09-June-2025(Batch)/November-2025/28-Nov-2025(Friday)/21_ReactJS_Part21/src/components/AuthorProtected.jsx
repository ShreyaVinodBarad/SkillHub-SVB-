import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

const AuthorProtected = ({ children }) => {
    const { auth } = useContext(AuthContext)
    return auth.author ? children : <Navigate to="/login" />
    {/* 👆 Only when author is logged than only show the Author Dashboard when there is something in author and if there is null in author when we refresh the page than redirect to Login page. */ }
}

export default AuthorProtected
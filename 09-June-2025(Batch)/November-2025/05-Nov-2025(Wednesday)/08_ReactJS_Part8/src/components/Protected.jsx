import React from 'react'

const Protected = ({ children }) => {
    const isLogin = true
    return isLogin ? children : <h3 className='alert alert-danger text-center mt-3'>Please Login</h3>
}

export default Protected
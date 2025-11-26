import React from 'react'
import PublicNavBar from './PublicNavBar'
import { Outlet } from 'react-router-dom'
import PublicFooter from './PublicFooter'

const PublicLayout = () => {
  return (
    <div>
      <PublicNavBar />
      <div style={{ minHeight: "calc(100vh - 55px)" }} className='container'>
        <Outlet />
      </div>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
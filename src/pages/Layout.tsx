import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className="test">
      <div>아직 못 만들었어요</div>
      <Outlet />
    </main>
  )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <h1>This is services page</h1>
      <Outlet />
    </div>
  )
}

export default ServicesPage

import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Fotter from './Fotter'

const RootLayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Fotter/>
    </div>
  )
}

export default RootLayout
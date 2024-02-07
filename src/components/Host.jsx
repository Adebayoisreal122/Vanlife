import React from 'react'
import { Outlet } from 'react-router-dom'
import HostNav from './HostNav'


const Host = () => {
  return (
    <>
    <HostNav/>
    <Outlet/>
    </>
  )
}

export default Host
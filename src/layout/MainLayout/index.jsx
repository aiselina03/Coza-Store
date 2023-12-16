import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'

function MainLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout
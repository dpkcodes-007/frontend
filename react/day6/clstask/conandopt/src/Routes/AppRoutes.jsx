import React from 'react'
import NavBar from '../components/NavBar'
import Render from '../components/Render'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <>

    <NavBar/>
    <Routes>
        <Route path='/' element={<Render/>}/>
    </Routes>

    
    </>
  )
}

export default AppRoutes
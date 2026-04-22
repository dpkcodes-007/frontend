import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/>

    </Routes>
    
    </>
  )
}

export default App
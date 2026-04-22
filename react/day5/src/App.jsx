import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './sildes/Home'
import Render from './sildes/Render'

const App = () => {
  return (
    <>
     <NavBar/> 
     <Routes>
      <Route path ="/" element = { <Home/>}/>
      <Route path ="/render" element = { <Render/>}/>

     </Routes>
    
    </>
  )
}

export default App
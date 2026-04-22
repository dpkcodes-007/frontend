import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Assignment from './slides/Assignment'
import Task from './slides/Task'
import Home from './slides/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
        <>
      <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/Task" element={<Task/>}/>
      <Route path = "/Assignment" element={<Assignment/>}/>
    </Routes>

  
    </>
  )
}

export default App
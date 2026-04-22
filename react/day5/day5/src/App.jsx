import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./slides/Home";

 const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
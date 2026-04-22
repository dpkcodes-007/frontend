import React, { useState } from 'react'

const Home = () => {
 const [colorChange,setColorChange]= useState("bg-white")

 const redColor= ()=>{
    setColorChange("bg-red-500")
 }

  const greenColor = ()=>{
    setColorChange("bg-green-500")
 }

  const blueColor = ()=>{
    setColorChange("bg-red-500")
 }



  return (
    <>
    
    <div>
        <h1>Background color Change </h1> 
        <h2>{colorChange}</h2>
        <div>
            <button onClick={redColor} className='bg-red-500 p-3 rounded-4xl'>Red</button>
            <button onClick={greenColor} className='bg-green-500 p-3 rounded-4xl'>Red</button>
            <button onClick={blueColor} className='bg-blue-500 p-3 rounded-4xl'>Red</button>
        </div>
    </div>

    
    
    
    </>
  )
}

export default Home
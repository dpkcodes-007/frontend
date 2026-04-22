import React, { useState } from 'react'

const Render = () => {
 const [sum,setSum]= useState(0)

 const increase = () =>{
    setSum(sum+1)
 }

 
 const decrease = () =>{
    setSum(sum-1)
 }

 
 const reset = () =>{
    setSum(0)
 }

 

        
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-blue-300 h-140 text-4xl gap-5'>
    <h1 className='bg-emerald-100 p-3 rounded-3xl '>Rendering Method </h1>
    <p className='bg-fuchsia-400 w-80 p-3 rounded-3xl text-center'>{sum}</p>

    <button className='bg-emerald-700  w-80 p-3 rounded-3xl text-center ' onClick={increase}>Increase</button>
    <button className='bg-red-600  w-80 p-3 rounded-3xl text-center ' onClick={decrease}>Decrease</button>
    <button className='bg-amber-300  w-80 p-3 rounded-3xl text-center ' onClick={reset}>reset</button>

    </div>


    
    </>
    
  )
}

export default Render
import React, { useState } from 'react'

const Home = () => {

const [render,setRender] = useState(0)
const increment = () =>{
    setRender(render+1)
}

const decrement = () =>{
    setRender(render-1)
}

const reset = () =>{
    setRender(0)
}
  return (
    <>
     
     <div className='p-4 bg-amber-300 flex flex-col h-144 justify-center items-center gap-10'>
        <h1 className='bg-blue-300 rounded-2xl p-2'>Button Rendering</h1>
        <h2 className='bg-black text-white rounded-2xl p-2'>{render}</h2>
        <div  className=' flex flex-col gap-10 '>
            <button onClick={increment} className='bg-green-300 rounded-2xl p-2'>Increment</button>
            <button onClick={decrement} className='bg-red-300 rounded-2xl p-2'>Decrement</button>
            <button onClick={reset} className='bg-blue-500 rounded-2xl p-2'>Reset</button>
        </div>
     </div>

     

    </>
  )
}

export default Home
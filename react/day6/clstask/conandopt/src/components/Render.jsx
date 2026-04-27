import React, { useState } from 'react'

const Render = () => {
 const [color,setColor] = useState(false)

 const handle = () =>{
    setColor(!color)
 }

  return (
    <>

    <div className='flex flex-col justify-center items-center bg-gray-600 h-144 gap-10' >
    
     <h1 className='bg-white text-center rounded-2xl p-3 w-340'>Color Change</h1>    
    <div className=' w-40 text-center h-40 '>
        <p> {color? <p className='bg-fuchsia-900 rounded-fill'>fuchsia</p> : <p className='bg-orange-700  w-15 p-2 rounded-2xl'>orange</p>}</p>
    </div>
     
     <button className='bg-cyan-200 rounded-2xl p-3' onClick={handle}>Click here to change color</button>
    


    </div>

    
    </>
  )
}

export default Render
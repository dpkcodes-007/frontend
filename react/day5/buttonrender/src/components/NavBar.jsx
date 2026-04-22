import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-blue-300 flex justify-between items-center p-4 '>
        <div>
            Button Rendering
        </div>
        <div>
            <Link  to = "/"> Increment or Decrement </Link>
        </div>
    </div>
    
    </>
  )
}

export default NavBar
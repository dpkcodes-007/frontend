import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <>
    <div className='bg-amber-400 flex justify-between p-3'>

        <div className='p-3 '>
            Logo
        </div>

        <div className='flex justify-center items-center gap-10'>
            <Link to = "/">Home</Link>
            <Link to = "/render">Rendering System</Link>
        </div>
    </div>
    
    
    </>

    
  )
}

export default NavBar
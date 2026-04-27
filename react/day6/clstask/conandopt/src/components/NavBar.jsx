import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-lime-300 flex justify-between '>
        <div className='mx-10 p-3'>
            Logo
        </div>

        <div className='mx-10 p-3'>
            <Link to = '/'>Rendering</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
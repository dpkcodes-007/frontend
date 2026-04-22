import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-emerald-600 flex justify-between p-8'>
        <div className='hover:bg-black hover:text-white hover:rounded-4xl p-2'>
            Logo
        </div>
        <div className='  flex  gap-10'>
            <Link to = "/" className='w-30 flex justify-center hover:bg-black hover:text-white hover:rounded-4xl p-2'>Home</Link>
            <Link to = "/Task" className='w-30 flex justify-center hover:bg-black hover:text-white hover:rounded-4xl p-2' >Task</Link>
            <Link to = "/Assignment" className='w-30 flex justify-center hover:bg-black hover:text-white hover:rounded-4xl p-2 '>Assignment</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'

export const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = ()=>{
      setNav(!nav)
    }
  return (
    <div className='fixed w-full bg-[#f9f2ec] px-4 py-4 md:px-16 text-[#4d3319] font-[Poppins] bg-opacity-70 shadow-md' style={{backdropFilter: 'blur(5px)', webkitBackdropFilter: 'blur(5px)'}}>
        <div className='flex justify-between items-center'>
            <h1>Qlynn</h1>
            <div className='hidden md:flex gap-8 cursor-pointer'>
                <h2>Home</h2>
                <h2>Features</h2>
                <h2>Skills</h2>
                <h2>Projects</h2>
                <h2>Contact</h2>
            </div>
            {/* humburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                <FaBars className='cursor-pointer'/>
            </div>
            {/* mobile */}
            <div onClick={handleNav} className={nav ? 'overflow-hidden md:hidden ease-in duration-300 absolute text-[#f9f2ec] top-0 right-0 h-screen w-[40%] bg-[#4d3319]/90 px-4 py-16' : 'absolute left-[-100%] top-0 h-screen ease-in duration-500' }>
                <div  className='flex flex-col gap-4 cursor-pointer text-lg'>
                    <h2>Home</h2>
                    <h2>Features</h2>
                    <h2>Skills</h2>
                    <h2>Projects</h2>
                    <h2>Contact</h2>
                </div>
            </div>
        </div>
        
    </div>
  )
}

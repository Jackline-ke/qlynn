import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-scroll'

export const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = ()=>{
      setNav(!nav)
    }
    const closeNav = () => {
        setNav(false);
    } 
  return (
    <div className='fixed  w-full px-8 py-4 md:px-16 text-[#4d3319] font-serif bg-opacity-70 shadow-md' style={{ backdropFilter: 'blur(5px)', webkitBackdropFilter: 'blur(5px)', zIndex: 1000 /* Set a higher z-index */ }}>
        <div className='flex justify-between items-center'>
            <Link to='home' smooth={true} duration={2000}><h1 className='cursor-pointer'>Qlynn Designs.</h1></Link>
            <div className='hidden lg:flex gap-8 cursor-pointer'>
                <Link to='home' smooth={true} duration={2000}>
                    <h2>Home</h2>
                </Link>
                <Link to='features' smooth={true} duration={2000}>
                    <h2>Features</h2>
                </Link>
                <Link to='skills' smooth={true} duration={2000}>
                    <h2>Skills</h2>
                </Link>
                <Link to='projects' smooth={true} duration={2000}>
                    <h2>Projects</h2>
                </Link>
                {/* <Link to='contact' smooth={true} duration={2000}>
                    <h2>Contact</h2>
                </Link> */}
            </div>
            {/* humburger */}
            <div onClick={handleNav} className='lg:hidden z-10'>
                <FaBars size={20} className='cursor-pointer'/>
            </div>
            {/* mobile */}
            <div onClick={handleNav} className={nav ? 'overflow-hidden lg:hidden ease-in duration-300 absolute text-[#f9f2ec] top-0 right-0  w-[40%] bg-[#4d3319]/90 px-4 py-16' : 'absolute left-[-100%] top-0 h-screen ease-in duration-500' }>
                <div  className='flex flex-col gap-4 cursor-pointer text-lg'>
                <Link to='home' smooth={true} duration={2000} onClick={closeNav}>
                    <h2>Home</h2>
                </Link>
                <Link to='features' smooth={true} duration={2000} onClick={closeNav}>
                    <h2>Features</h2>
                </Link>
                <Link to='skills' smooth={true} duration={2000} onClick={closeNav}>
                    <h2>Skills</h2>
                </Link>
                <Link to='projects' smooth={true} duration={2000} onClick={closeNav}>
                    <h2>Projects</h2>
                </Link>
                {/* <Link to='contact' smooth={true} duration={2000} onClick={closeNav}>
                    <h2>Contact</h2>
                </Link> */}
                </div>
            </div>
        </div>
        
    </div>
  )
}

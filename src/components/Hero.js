import React from 'react'
import {FaTwitter, FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa'
import {Link} from 'react-scroll'
import wave from '../assets/wave.png'

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#f9f2ec] text-[#4d3319] font-serif flex justify-center items-center px-4'>
        <div className='text-center py-8'>
            <div className='flex items-center justify-center'>
              <p>Hi there!</p>
              <img src={wave} className='w-16'/>
            </div>
            <p className='text-5xl sm:text-6xl font-semibold'>I'm Jackline Adhiambo</p>
            <p className="px-4 mb-3 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl">A Frontend Developer and a UI/UX Designer who designs and implement high end web application.</p>
            <Link><p className="text-2xl font-bold ">My Resume</p></Link>
            <div className='flex gap-4 justify-center mt-5'>
              <a href='https://github.com/Jackline-ke'><FaGithub size={25} className='cursor-pointer hover:scale-110 duration-500'/></a>
              <a href='https://www.linkedin.com/in/jackline-adhiambo-5049631a7/'><FaLinkedin size={25} className='cursor-pointer hover:scale-110 duration-500'/></a>
              <a href='https://twitter.com/JacklineOdhia19'><FaTwitter size={25} className='cursor-pointer hover:scale-110 duration-500'/></a>
              <a href='https://medium.com/@antoninahodhiambo'><FaMedium size={25} className='cursor-pointer hover:scale-110 duration-500'/></a>
            </div>
        </div>

    </div>
  )
}

export default Hero
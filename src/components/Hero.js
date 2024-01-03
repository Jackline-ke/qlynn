import React from 'react'
import {FaTwitter, FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-[#f9f2ec] text-[#4d3319] font-serif flex justify-center items-center px-4'>
        <div className='text-center'>
            <p className='text-lg'>Hi there! <br/> <span className='text-5xl sm:text-6xl font-semibold'>I'm Jackline Adhiambo</span></p>
            <p className="mb-3 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl">A Frontend Developer and a UI/UX Designer who designs and implement high end web application.</p>
            <a href="/" className="text-lg font-bold">My Resume</a>
            <div className='flex gap-4 justify-center mt-5'>
                <a href='https://github.com/Jackline-ke'><FaGithub size={20} className='cursor-pointer'/></a>
                <a href='https://www.linkedin.com/in/jackline-adhiambo-5049631a7/'><FaLinkedin size={20} className='cursor-pointer'/></a>
                <a href='https://twitter.com/JacklineOdhia19'><FaTwitter size={20} className='cursor-pointer'/></a>
                <a href='https://medium.com/@antoninahodhiambo'><FaMedium size={20} className='cursor-pointer'/></a>
            </div>

        </div>

    </div>
  )
}

export default Hero
import React, { useEffect } from "react"
import {FaTwitter, FaLinkedin, FaGithub, FaMedium} from 'react-icons/fa'
import {Link} from 'react-scroll'
import wave from '../assets/wave.png'
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/bg.png"

const Hero = () => {
  useEffect( () =>{
    AOS.init({duration: 2000});
  }, [])

  return (
    <div id='home' className='w-full h-screen relative bg-[#f9f2ec] text-[#4d3319] font-serif flex justify-center items-center px-4'>
      <img src={hero} className='w-full h-full object-cover' alt='hero'/>
        <div className='flex flex-col justify-center items-center py-8 absolute w-full h-full top-0 left-0'>
            <div data-aos="fade-down" className='flex items-center justify-center'>
              <p>Hello</p>
              <img alt='wave' src={wave} className='w-16'/>
            </div>
            <p data-aos="fade-down" className='text-5xl sm:text-6xl font-semibold'>I'm Jackline Adhiambo</p>
            <p className="px-4 mb-3 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl">A Frontend Developer and a UI/UX Designer who designs and implement high end web application.</p>
            <Link><p className="text-2xl font-bold " data-aos="fade-up">My Resume</p></Link>
            <div data-aos="fade-up" className='flex gap-4 justify-center mt-5'>
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
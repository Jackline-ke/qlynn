import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import figma from '../assets/figma.png'
import git from '../assets/github.png'

const Skills = () => {
  return (
    <div id="skills" className='pt-32 lg:pt-0 w-full h-screen bg-[#f9f2ec] text-[#4d3319] font-serif flex flex-col justify-center items-center px-8 md:px-16'>
        <h3 className='mb-8 md:mb-12 text-4xl'>My <span className='font-bold'>Skills</span></h3>
        <div className='grid grid-cols-3 gap-2 md:gap-8 sm:grid-cols-4 lg:flex'>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={html} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>HTML</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={css} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>CSS</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={js} alt="HTML" className='w-10'/>
                </div>
                <h2 className=''>Javascript</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={react} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>React</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={react} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>Django</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={tailwind} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>Tailwind</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={figma} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>Figma</h2>
            </div>
            <div className='flex flex-col gap-2 py-4 px-4 items-center hover:scale-110 duration-500'>
                <div className='p-4 bg-white rounded-full shadow-sm shadow-[#996633]'>
                    <img src={git} alt="HTML" className='w-12'/>
                </div>
                <h2 className=''>Git</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills
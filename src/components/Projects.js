import React, { useEffect } from "react"
import market from '../assets/marketHub.png'
import AOS from "aos";
import "aos/dist/aos.css"

const Projects = () => {
    useEffect( () =>{
        AOS.init({duration: 2000});
      }, [])
  return (
    <div data-aos="fade-up" id='projects' className='py-24 w-full h-full text-[#4d3319] font-serif flex flex-col justify-center items-center px-8 md:px-48'>
        <h3 className='mb-8 text-4xl'>My <span className='font-bold'>Projects</span></h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-[#f9f2ec] p-6 rounded-md'>
                <div className='flex flex-col gap-2'>
                    <img src={market} alt='project' className="rounded"/>
                    <h2 className='text-xl font-bold'>marketHub</h2>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3 className=''><span className='font-bold'>Stack/Tools:</span> React, Tailwind</h3>
                </div>
            </div>
            <div className='bg-[#f9f2ec] p-8 rounded-md'>
                <div className='flex flex-col gap-2'>
                    <img src={market} alt='project' className="rounded"/>
                    <h2 className='text-xl font-bold'>marketHub</h2>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3 className=''><span className='font-bold'>Stack/Tools:</span> React, Tailwind</h3>
                </div>
            </div>
            <div className='bg-[#f9f2ec] p-8 rounded-md'>
                <div className='flex flex-col gap-2'>
                    <img src={market} alt='project' className="rounded"/>
                    <h2 className='text-xl font-bold'>marketHub</h2>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3 className=''><span className='font-bold'>Stack/Tools:</span> React, Tailwind</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
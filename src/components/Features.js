import React, { useEffect } from "react"
import AOS from "aos";
import SettingsIcon from '@mui/icons-material/Settings';
import DiamondIcon from '@mui/icons-material/Diamond';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import "aos/dist/aos.css";

const Features = () => {
    useEffect( () =>{
        AOS.init({duration: 2000});
      }, [])
    
  return (
    <div  id="features" className='py-24 lg:py-0 w-full h-screen text-[#4d3319] font-serif flex flex-col justify-center items-center px-8 md:px-48'>
        <h3 className='mb-8 text-4xl'>My <span className='font-bold'>Expertise</span></h3>
        <div data-aos="fade-up" className='flex flex-col lg:flex-row gap-8'>
            <div className='border border-[#f9f2ec] rounded-md py-4 px-4 md:px-8 md:py-8 flex flex-col gap-2 items-center justify-center hover:bg-[#4d3319] hover:text-[#ffffff] cursor-pointer hover:scale-90 duration-500'>
                <HomeRepairServiceIcon className=""/>
                <h2 className='text-center text-xl font-bold'>Creative Work</h2>
                <p className='text-center'>Proficient in translating complex UI designs into interactive and responsive web pages .</p>
            </div>
            <div className='border border-[#f9f2ec] rounded-md py-4 px-4 md:px-8 md:py-8 flex flex-col gap-2 items-center justify-center hover:bg-[#4d3319] hover:text-[#ffffff] cursor-pointer hover:scale-90 duration-500'>
                <DiamondIcon className=""/>
                <h2 className='text-center text-xl font-bold'>Strong Dedication</h2>
                <p className='text-center'>Committed to delivering high-quality code with a strong emphasis on performance optimization and user accessibility standards</p>
            </div>
            <div className='border border-[#f9f2ec] rounded-md py-4 px-4 md:px-8 md:py-8 flex flex-col gap-2 items-center justify-center hover:bg-[#4d3319] hover:text-[#ffffff] cursor-pointer hover:scale-90 duration-500'>
                <SettingsIcon className=""/>
                <h2 className='text-center text-xl font-bold'>Deeper Skillset</h2>
                <p className='text-center'>Skilled in utilizing modern development tools and libraries to build scalable and maintainable applications.</p>
            </div>
        </div>
    </div>
  )
}

export default Features
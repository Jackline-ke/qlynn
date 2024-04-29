import React, { useEffect } from "react"
import project1 from '../assets/project1.png'
import market from '../assets/marketHub.png'
import hub from '../assets/inHub.png'
import AOS from "aos";
import "aos/dist/aos.css"

const Projects = () => {
    useEffect( () =>{
        AOS.init({duration: 2000});
      }, [])
  return (
    <div id='projects' className='py-24 w-full h-full text-[#4d3319] font-serif flex flex-col justify-center items-center px-8 md:px-48'>
        <h3 className='mb-8 text-4xl'>My <span className='font-bold'>Projects</span></h3>
        <div  data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-[#f9f2ec] p-6 rounded-md'>
                <div className='flex flex-col gap-2'>
                <a target="_blank" href="https://onlineshop-ashen.vercel.app/" className="cursor-pointer"><img src={project1} alt='project' className="rounded"/></a>
                    <a target="_blank" href="https://onlineshop-ashen.vercel.app/" className="cursor-pointer"><h2 className='text-xl font-bold'>Onlineshop</h2></a>
                    <p className=''>OnlineShop offers a seamless and convenient way to explore and shop the latest women's fashion trends. Browse our curated collection of stylish apparel and accessories, all available at your fingertips. With our user-friendly interface, adding products to your cart, adjusting quantities, and managing your selections is effortless.</p>
                    <h3 className=''><span className='font-bold'>Stack/Tools:</span> React, Sass</h3>
                </div>
            </div>
            <div className='bg-[#f9f2ec] p-8 rounded-md'>
                <div className='flex flex-col gap-2'>
                    <a target="_blank" href="https://innovate-hub-beige.vercel.app/" className="cursor-pointer"><img src={hub} alt='project' className="rounded"/></a>
                    <a target="_blank" href="https://innovate-hub-beige.vercel.app/" className="cursor-pointer"><h2 className='text-xl font-bold'>InnovateHub</h2></a>
                    <p className=''>InnovateHub is a landing page showcasing cutting-edge IT and tech service solutions tailored to meet the evolving needs of businesses in today's digital era of an organization.</p>
                    <h3 className=''><span className='font-bold'>Stack/Tools:</span> React, Tailwind</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
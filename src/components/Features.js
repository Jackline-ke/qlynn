import React from 'react'

const Features = () => {
  return (
    <div id="features" className='py-16 w-full h-full text-[#4d3319] font-serif flex flex-col justify-center items-center px-8 md:px-48'>
        <h3 className='mb-8 text-4xl'>My <span className='font-bold'>Expertise</span></h3>
        <div className='flex flex-col lg:flex-row gap-8'>
            <div className='border border-[#f9f2ec] rounded-md py-4 px-4 md:px-8 md:py-8 flex flex-col gap-2 items-center'>
                <h2 className='text-center text-xl font-bold'>UI/UX Design</h2>
                <p className='text-center'>A Frontend Developer with expertise in crafting engaging user experiences.</p>
            </div>
            <div className='border border-[#f9f2ec] rounded-md py-4 px-4 md:px-8 md:py-8 flex flex-col gap-2 items-center'>
                <h2 className='text-center text-xl font-bold'>Frontend Development</h2>
                <p className='text-center'>A Frontend Developer with expertise in crafting engaging user experiences.</p>
            </div>
            <div className='border border-[#f9f2ec] rounded-md py-4 px-4 md:px-8 md:py-8 flex flex-col gap-2 items-center'>
                <h2 className='text-center text-xl font-bold'>Graphic Design</h2>
                <p className='text-center'>A Frontend Developer with expertise in crafting engaging user experiences.</p>
            </div>
        </div>
    </div>
  )
}

export default Features
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full bg-[#f9f2ec] text-[#4d3319] font-serif flex flex-col justify-center items-center px-8 py-32'>
       <h3 className='mb-8 text-4xl'>Get in <span className='font-bold'>Touch!</span></h3>
       <form className='px-2 py-4 flex flex-col gap-4'>
        <input placeholder='Your Name' className='py-4 pl-4 pr-32 text-left'/>
        <input placeholder='Your Email' className='py-4 pl-4 pr-32'/>
        <input placeholder='Message...' className='py-16 pl-4 pr-32'/>
      </form> 
      <button className='bg-[#4d3319] text-[#f9f2ec] mt-4 px-10 py-2 rounded-md shadow-md shadow-white'>Submit</button>
    </div>
  )
}

export default Contact
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='py-24 lg:py-16 w-full h-full bg-[#f9f2ec] text-[#4d3319] font-serif flex flex-col justify-center items-center px-8'>
       <h3 className='mb-8 text-4xl'>Get in <span className='font-bold'>Touch!</span></h3>
       <form className='px-2 py-4 flex flex-col gap-4'>
       <label>Your Name</label>
        <input className='py-2 pl-4 pr-32 text-left'/>
        <label>Your Email</label>
        <input className='py-2 pl-4 pr-32'/>
        <label>Meessage</label>
        <input className='py-16 pl-4 pr-32'/>
      </form> 
      <button className='bg-[#4d3319] text-[#f9f2ec] mt-4 px-10 py-2 rounded-md shadow-md shadow-white'>Submit</button>
    </div>
  )
}

export default Contact
import React from 'react'

const Features = () => {
  return (
    <div className='w-full bg-[#f9f2ec] text-[#4d3319] font-serif flex justify-center items-center px-4'>
        <div className='flex flex-col sm:flex-row gap-6'>
            <div className='border px-8 py-8 flex flex-col items-center'>
                <h1>Title</h1>
                <h3>Here is a breif description</h3>
            </div>
            <div className='border px-8 py-8 flex flex-col items-center'>
                <h1>Title</h1>
                <h3>Here is a breif description</h3>
            </div>
            <div className='border px-8 py-8 flex flex-col items-center'>
                <h1>Title</h1>
                <h3>Here is a breif description</h3>
            </div>
        </div>
    </div>
  )
}

export default Features
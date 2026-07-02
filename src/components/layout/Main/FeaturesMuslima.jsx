import React from 'react'
import Girl from "../../../assets/girl.png";

function FeaturesMuslima() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-24'>

      <div className="text-center">
        <h1 className='text-5xl font-bold text-[#2F327D]'>
          <span className='text-[#F48C06]'>Our </span>
          Features
        </h1>

        <p className='text-gray-500 text-lg mt-5 max-w-2xl mx-auto leading-8'>
          This very extraordinary feature, can make learning activities more efficient
        </p>
      </div>

      <div className='flex items-center justify-between gap-20 mt-24'>

        <div className='max-w-xl'>
          <h2 className='text-5xl font-bold text-[#2F327D] leading-tight'>
            <span className='text-[#F48C06]'>Tools</span> For Teachers And Learners
          </h2>

          <p className='text-gray-500 text-xl leading-10 mt-8'>
            Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>

        <img
          src={Girl}
          alt="Girl"
          className='w-[470px] object-contain'
        />

      </div>

    </div>
  )
}

export default FeaturesMuslima;
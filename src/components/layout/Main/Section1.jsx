import React from 'react'
import Header from '../Header'
import girlImg from '../../../assets/qoraqiz.png'

function Section1() {
  return (
    <div className="relative bg-[#FBEFDE] min-h-screen overflow-hidden">
      <Header />

      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-white rounded-t-[50%] translate-y-1/2"></div>

      <div className="relative section1-container pt-16 md:pt-24 pb-40 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="flex flex-col gap-8 max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="section1-title-primary">Studying</span>
            <span className="section1-title-secondary"> Online is now much easier</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed max-w-md">
            Skilline is an interesting platform that will teach you in more an interactive way
          </p>

          <div className="flex items-center gap-6 mt-2">
            <button className="bg-[#F39A1F] hover:bg-[#F39A1F]/90 transition text-white font-semibold text-lg px-15 py-10 rounded-full shadow-md shadow-orange-300/50 ">
              Join for free
            </button>

            <button className="flex items-center gap-4 group">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md">
                <svg className="w-5 h-5 text-[#23BDEE] translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-[#2B2A75] font-medium text-lg">Watch how it works</span>
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[544/892] rounded-2xl overflow-hidden">
            <img
              src={girlImg}
              alt="Student holding books"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section1
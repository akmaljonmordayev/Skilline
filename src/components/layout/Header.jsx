import React from 'react'
import logo from '../../assets/logo.png';
function Header() {
  return (
    <div>
      <div className='flex items-center justify-between  '>
        <div className=''><img src={logo} alt="" /></div>
        <nav className='flex items-center justify-between gap-[34px]'>
          <div className='flex gap-[80px]'>
          <a href="/" className=" text-[22px] text-[#252641] font-normal ">
          Home
        </a>
        <a href="/careers" className=" text-[22px] text-[#252641] font-normal">
          Careers
        </a>
        <a href="/blog" className=" text-[22px] text-[#252641] font-normal hover:text-black ">
          Blog
        </a>
        <a href="/about-us" className=" text-[22px] text-[#252641] font-normal ">
          About Us
        </a>
          </div>
          <div className='flex gap-[34px] '>
          <button className="w-[160px] h-[60px] bg-white text-[#6C6C6C] text-[22px] font-normal rounded-full">
        Login
      </button>

      <button className="w-[160px] h-[60px] bg-[#F59E0B] text-[#FFFFFF] text-[22px] font-medium rounded-full">
        Sign Up
      </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
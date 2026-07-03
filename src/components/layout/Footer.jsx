import React from 'react';
import Logo from '../../assets/Footerlogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#252641] text-white py-16 flex flex-col items-center text-center px-4">
      
      <div className="flex items-center justify-center gap-6 mb-12">
        <img src={Logo} alt="Skilline Logo" className="h-10 w-auto" />
        <div className="w-[1px] h-10 bg-[#626377]"></div>
        <span className="text-left text-[18px] font-medium tracking-wide max-w-[120px] leading-tight text-white">
          Virtual Class for Zoom
        </span>
      </div>

      <div className="w-full max-w-[540px] mb-14">
        <h3 className="text-[#B2B3CF] text-[20px] font-medium tracking-wide mb-5">
          Subscribe to get our Newsletter
        </h3>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full " onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-auto flex-grow px-6 py-3.5 rounded-full  bg-transparent border border-[#525368] text-white placeholder-[#525368] focus:outline-none focus:border-[#4A4EED] text-[15px]"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#4A4EED] hover:bg-[#3b3fdb] text-white font-medium px-8 py-3.5 rounded-full transition text-[15px] whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="text-[#B2B3CF] text-[14px] tracking-wide">
        <div className="flex justify-center items-center gap-4 mb-4">
          <a href="#" className="hover:text-white transition">Careers</a>
          <span className="text-[#525368]">|</span>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <span className="text-[#525368]">|</span>
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        </div>
        <p className="text-[#626377] text-[13px]">
          © 2021 Class Technologies Inc.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
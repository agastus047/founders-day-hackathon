import React from 'react';
import './text.css';

const Container = () => {
  return (
    <div data-aos='fade-up' className="bg-black mb-5 md:mt-10 md:mb-10 flex flex-col md:flex-row gap-5 md:gap-20 justify-center items-center">
      <div className=" w-full md:w-auto p-4">
        <div className=" p-2">
        <p className="text-shadows font-bold text-center  text-transparent bg-gradient-to-t from-[#1b0362] to-[#50fefe] bg-clip-text text-5xl md:text-5xl lg:text-7xl">36 HOURS</p>
          <p className='text-white mt-3 md:mt-5 font-medium text-center text-lg md:text-2xl'>OF NONSTOP HACKING</p>
        </div>
      </div>
      <div className="w-full md:w-auto p-4">
        <div className="text-white p-2">
        <p className="text-shadows font-bold text-center  text-transparent bg-gradient-to-l from-[#1b0362] to-[#50fefe] bg-clip-text text-5xl md:text-5xl lg:text-7xl">100 +</p>
          <p className='mt-3 md:mt-5 font-medium text-center text-lg md:text-2xl'>ATTENDEES</p>
        </div>
      </div>
      <div className="w-full md:w-auto p-4">
        <div className="text-white p-2">
        <p className="text-shadows font-bold text-center  text-transparent bg-gradient-to-t from-[#1b0362] to-[#50fefe] bg-clip-text text-5xl md:text-5xl lg:text-7xl">3,00,000</p>
          <p className='mt-3 md:mt-5 font-medium text-center text-lg md:text-2xl'>WORTH OF PRIZES</p>
        </div>
      </div>
    </div>
  );
};

export default Container;

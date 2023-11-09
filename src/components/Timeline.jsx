import React from 'react';

const CustomizedTimeline = () => {
  return (
    <div class="h-auto w-full flex justify-center items-center">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div class="col-span-9 text-center mb-12 mt-8">
          <h2 class="text-white font-bold text-5xl text-center my-4 ">TIMELINE</h2>
        </div>
        <div class="col-span-4 w-full h-full">
          <div class="w-auto h-auto bg-gray-800 rounded-xl p-2 py-4 md:pl-6">
            <h1 class="text-white text-center text-xl font-medium py-2">15 December 2023</h1>
            <p class="text-gray-100 text-center sm:text-xl text-md mb-2">Abstract Submission</p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-white"></div>
          <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">1</div>
        </div>
        <div class="col-span-4 w-full h-full"></div>

        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-white"></div>
          <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">2</div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-gray-800 rounded-md p-2 py-4 md:pl-4">
            <h1 class="text-white text-xl text-center font-medium py-2">15 January 2023</h1>
            <p class="text-gray-100 sm:text-xl text-md text-center mb-2">Announcement of Shortlisted 20 Teams.</p>
          </div>
        </div>

        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-gray-800 rounded-md p-2 py-4 md:pl-4">
            <h1 class="text-white text-xl text-center font-medium py-2">17 February 2023</h1>
            <p class="text-gray-100 text-center sm:text-xl text-md mb-2">Hackathon Day-1</p>
          </div>
        </div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-white"></div>
          <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">3</div>
        </div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="col-span-4 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-white"></div>
          <div class="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">4</div>
        </div>
        <div class="col-span-4 w-full h-full ">
          <div class="w-full h-full bg-gray-800 rounded-md p-2 py-4 md:pl-4">
            <h1 class="text-white text-xl text-center font-medium py-2">18 February 2023</h1>
            <p class="text-gray-100 sm:text-xl text-md text-center mb-2">Hackathon Day-2</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CustomizedTimeline;

import React from 'react';

const CustomizedTimeline = () => {
  return (
    <div className="h-auto w-full flex justify-center items-center ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 ">
        <div className="col-span-9 text-center mb-12 mt-8 ">
          <h2 className="text-white font-bold text-5xl text-center my-4 ">TIMELINE</h2>
        </div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center ">1</div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black border border-white p-4 rounded-md p-2 py-4 md:pl-4 border border-gradient-animation [#148ef9]">
            <h1 className="text-white text-xl text-center font-medium py-2 ">15 December 2023</h1>
            <p className="text-gray-100 sm:text-xl text-md text-center mb-2">Abstract Submission </p>
          </div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full">
          <div className="w-auto h-auto bg-black border border-white p-4 rounded-xl p-2 py-4 md:pl-6 border border-gradient-animation [#50fefe]">
            <h1 className="text-white text-center text-xl font-medium py-2">15 January 2024</h1>
            <p className="text-gray-100 text-center sm:text-xl text-md mb-2">Abstract Submission Ends </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">2</div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">3</div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black border border-white p-4 rounded-md p-2 py-4 md:pl-4 border border-gradient-animation [#148ef9]">
            <h1 className="text-white text-xl text-center font-medium py-2">20 January 2024</h1>
            <p className="text-gray-100 sm:text-xl text-md text-center mb-2">Announcement of Shortlisted 20 Teams </p>
          </div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black border border-white p-4 rounded-md p-2 py-4 md:pl-4 border border-gradient-animation [#50fefe]">
            <h1 className="text-white text-xl text-center font-medium py-2">16 February 2024</h1>
            <p className="text-gray-100 text-center sm:text-xl text-md mb-2">Reporting at the Venue </p>
          </div>
        </div>

        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">4</div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">5</div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black border border-white p-4 rounded-md p-2 py-4 md:pl-4 border border-gradient-animation [#148ef9]">
            <h1 className="text-white text-xl text-center font-medium py-2">17 February 2024</h1>
            <p className="text-gray-100 text-center sm:text-xl text-md mb-2">Hackathon Day-1 </p>
          </div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black border border-white p-4 rounded-md p-2 py-4 md:pl-4 border border-gradient-animation [#50fefe]">
            <h1 className="text-white text-xl text-center font-medium py-2">18 February 2024</h1>
            <p className="text-gray-100 sm:text-xl text-md text-center mb-2">Hackathon Day-2 </p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">6</div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black font-bold text-center">7</div>
        </div>
        <div data-aos="fade" className="col-span-4 w-full h-full ">
          <div className="w-full h-full bg-black border border-white p-4 rounded-md p-2 py-4 md:pl-4 border border-gradient-animation [#148ef9]">
            <h1 className="text-white text-xl text-center font-medium py-2">19 February 2024</h1>
            <p className="text-gray-100 text-center sm:text-xl text-md mb-2">Prize Distribution </p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default CustomizedTimeline;
